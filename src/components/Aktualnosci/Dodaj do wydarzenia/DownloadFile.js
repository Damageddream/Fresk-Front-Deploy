import { useState, useEffect, useContext } from "react";
import axios from "axios";
import DeleteFile from "./UsunPlik";
import AuthContext from "../../Utilities/Context";

const DownloadFile = (props) => {

  //context for for checking if user is logged in
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  // states for storing files to download and loading state and errors
  const [file, setFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState();

  //state for filtered files by wydarzenie id after all files mounted
  const [filteredFiles, setFilteredFiles] = useState([]);

  useEffect(() => {
    const filtFiles = [];
    file.map((fFile) => {
      if (fFile.wydarzenie === parseInt(props.wydarzenie)) {
        filtFiles.push(fFile);
      }
      setFilteredFiles(filtFiles);
    });
  }, [file]);

  // when render use function to get files
  useEffect(() => {
    getFiles();
  }, []);

  //rerender after new file is added
  useEffect(()=>{
    getFiles();
  }, [props.addedFile])

  // function fetching files to donwload from backend
  const getFiles = () => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: "https://fundacja-fresk.pl/api/files/",
    })
      .then((response) => {
        const data = response.data;
        setFile(data);
      })
      .catch((error) => {
        setErrors(error);
      });
  };

  return (
    <>
      {filteredFiles.length > 0 && (
        <>
          <p>Do pobrania:</p>
          <ul>
            {filteredFiles.map((download) => {
              return (
                <li className="mb-2">
                  <a href={download.file} className="me-3">
                    {download.file_name}
                  </a>
                  {isLoggedIn && <DeleteFile file={download.id} getFiles={getFiles} />}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default DownloadFile;
