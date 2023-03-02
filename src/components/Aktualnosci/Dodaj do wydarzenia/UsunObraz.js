import axios from "axios";
import {
    MDBIcon,
  } from "mdb-react-ui-kit";
import { useState } from 'react';


const DeleteImage = (props) => {

    // state for handling loading
    const [isLoading, setIsLoading] = useState(false);

    //deleting props file from database
    const deleteHandler = () => {
        setIsLoading(true);
        axios({
            method: 'DELETE',
            url: `https://fundacja-fresk.pl/api/photos/${props.image}/`,
        })
        setIsLoading(false);
    }

    return(
        <>
            <MDBIcon onClick={deleteHandler} style={{ cursor: 'pointer' }} fas icon="trash" />
        </>
    )
}

export default DeleteImage;