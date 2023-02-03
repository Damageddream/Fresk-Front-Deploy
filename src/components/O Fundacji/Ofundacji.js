import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import fundacja from '../../images/fresk-logo.png'
import Pracownik from "./KartaPracownik";
import "../../sass/components/logo.css";
import Hania from '../../images/Hania.png';
import Magda from '../../images/Magda.png';
import Marcin from '../../images/Marcin.png';
import useWindowSize from '../Utilities/useWindowsSize';
import logo from '../../images/fresk-logo-beznapi.png'


const Ofundacji = () => {

  // variables for window size change
  const [width, height] = useWindowSize()


  //change picture depends on window size
  let picture = ''
  let id = ''
  if (width < '471') {
    picture = logo
    id = 'logos'
  }
  else {
    picture = fundacja
    id = 'freskPhoto'
  }

  // workers data for cards
  const Hanna = {
    name: 'Hanna Maria Pawluczyk',
    photo: Hania,
    function: 'Prezes Zarządu'
  }

  const Magdalena = {
    name: 'Magdalena Ewelina Anuszkiewicz',
    photo: Magda,
    function: 'Specjalista do spraw szkoleń'
  }

  const Marcan = {
    name: 'Marcin Grabowski',
    photo: Marcin,
    function: 'Specjalista do spraw szkoleń'
  }


  //Setting className to active or ''
  const [isActiveh, setIsActiveh] = useState(false);
  const [isActiveo, setIsActiveo] = useState(true);
  const [isActiver, setIsActiver] = useState(false);
  const [isActivez, setIsActivez] = useState(false);

  //seeting one of list items as active and rest as inactive
  const historiaHandler = () => {
    setIsActiveh(true);
    setIsActiver(false);
    setIsActivez(false);
    setIsActiveo(false);
  };
  const radaHandler = () => {
    setIsActiver(true);
    setIsActiveh(false);
    setIsActivez(false);
    setIsActiveo(false);
  };
  const zespolHandler = () => {
    setIsActivez(true);
    setIsActiver(false);
    setIsActiveh(false);
    setIsActiveo(false);
  };

  const oNasHandler = () => {
    setIsActiveo(true);
    setIsActiver(false);
    setIsActivez(false);
    setIsActiveh(false);
  };


  return (
    <div>
      <div className='logoContainer'>
        <div
          id={id}
          className="center bg-image"
          style={{
            backgroundImage:
              `url(${picture})`,
          }}
        >
        </div>
      </div>
      <Row className='justify-content-center'>
        <Col className="mt-5 ms-5 me-5">
          <ListGroup as="ul">
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              as="li"
              onClick={oNasHandler}
              className={
                isActiveo ? "list-group-item active" : "list-group-item"
              }
            >
              O nas
            </ListGroup.Item>
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              as="li"
              onClick={historiaHandler}
              className={
                isActiveh ? "list-group-item active" : "list-group-item"
              }
            >
              Historia Fundacji
            </ListGroup.Item>
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              as="li"
              onClick={radaHandler}
              className={
                isActiver ? "list-group-item active" : "list-group-item"
              }
            >
              Rada i Zarząd
            </ListGroup.Item>
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              as="li"
              onClick={zespolHandler}
              className={
                isActivez ? "list-group-item active" : "list-group-item"
              }
            >
              Zespół
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={8} className="mt-5">
          <div className='text-center'>
            {isActiveo && <h2 className='text-center mb-4'>FUNDACJA ROZWOJU EDUKACJI I SPOŁECZNEJ KREATYWNOŚCI</h2>}
          </div>
          <div>
            {isActiveo && <p>
              <h4 className='text-center mb-3'>Celem działania Fundacji jest: </h4>
              <ol className='text-left'>
                <li className='mb-2'>Organizowanie działalności edukacyjnej, kulturalnej i sportowej na rzecz podopiecznych Fundacji.</li>
                <li className='mb-2'>Niesienie pomocy osobom niepełnosprawnym oraz uczniom o specjalnych potrzebach edukacyjnych i ich rodzinom.</li>
                <li className='mb-2'>Rozwijanie form integracji społecznej oraz aktywizacji zawodowej osób niepełnosprawnych.</li>
                <li className='mb-2'>Podtrzymywanie tradycji narodowej, pielęgnowania polskości oraz rozwoju świadomości narodowej, obywatelskiej i kulturowej.</li>
                <li className='mb-2'>Działania na rzecz wzrostu udziału turystyki w gospodarce Polski, zwiększenie atrakcyjności oferty turystycznej naszego kraju. </li>
                <li className='mb-2'>Wzmocnienie pozycji polskich regionów w europejskich sieciach przyrodniczych poprzez poprawę lub zachowanie dobrego stanu środowiska i zapobieganie jego degradacji.</li>
                <li className='mb-2'>Upowszechnianie kultury fizycznej i sportu oraz promowanie zdrowia i zdrowego stylu życia.</li>
                <li className='mb-2'>Udzielanie pomocy społecznej, w tym pomocy rodzinom i osobom w trudnej sytuacji życiowej oraz wyrównywania szans tych rodzin i osób.</li>
                <li className='mb-2'>Rozwój krajoznawstwa oraz organizowanie wypoczynku dzieci i młodzieży oraz osób dorosłych</li>
                <li className='mb-2'>Wspieranie ratownictwa i ochrony ludności, oraz niesienie pomocy ofiarom katastrof, klęsk żywiołowych, konfliktów zbrojnych i wojen w kraju i za granicą.</li>
                <li className='mb-2'>Praca w sferze edukacji nieformalnej oraz nauka innowacyjnych metod kształcenia i doskonalenie umiejętności interpersonalnych wśród społeczeństwa polskiego, zwłaszcza dzieci i młodzieży, osób w wieku zaawansowanym, oraz pomoc osobom zagrożonym wykluczeniem społecznym.</li>
                <li className='mb-2'>Wspieranie edukacyjnej, społecznej i zawodowej aktywności obywateli, w tym między innymi takich grup społecznych jak: osoby niepełnosprawne, dzieci, kobiety, młodzież oraz inne grupy społeczne wymagające wsparcia.</li>
                <li className='mb-2'>Propagowanie, wśród społeczeństwa polskiego, wiedzy o prawie polskim i europejskim oraz o prawach człowieka, a także wiedzy o współczesnej Europie, w szczególności zaś o procesie integracji europejskiej.</li>
                <li className='mb-2'>Propagowanie wiedzy i kształtowanie umiejętności społeczeństwa polskiego, w zakresie korzystania ze środków Unii Europejskiej i innych instytucji grantodawczych.</li>
                <li className='mb-2'>Przeciwdziałanie zjawisku ksenofobii i dyskryminacji ze względu na wiek, płeć, rasę, narodowość, status społeczny i inne przyczyny</li>
                <li className='mb-2'>Podejmowanie działań na rzecz rozwoju obszarów wiejskich.</li>
                <li className='mb-2'>Pomoc organizacjom pozarządowym w realizacji ich celów statutowych.</li>
              </ol>
   
              </p>}
          </div>
          <div className='text-center mb-5'>
            {isActiveh && <h2>HISTORIA</h2>}
          </div>
          <div>
            {isActiveh && <p className='text-left'>
              <p>2019 r. był pierwszym rokiem naszej działalności, poświęciliśmy go głównie na organizację i pozyskiwanie partnerów i kontrahentów. Udało nam się jednak pomóc przy realizacji trzech projektów:</p>
              <ol>
                <li className='mb-1'>
                	Program powszechnej nauki pływania: "Umiem Pływać" – projekt skupiający się na umożliwieniu uczniom okolicznych szkół uczęszczania na zajęcia z pływania.
                </li>
                <li className='mb-1'>
                "Pobudzenie aktywności lokalnej w gminie nowinka i powiecie sejneńskim"
                </li>
                <li className='mb-1'>
                "Pobudzenie aktywności lokalnej w powiecie suwalskim"
                </li>
              </ol>
              <p>2020 r. był drugim rokiem naszej działalności, poświęciliśmy go na realizację celów statutowych.  Wspólnie z partnerami realizowaliśmy następujące działania projektowe:</p>
              <ol>
                <li className='mb-1'>
                Przeprowadzenie szkoleń w ramach projektu usług kształcenia „Smartfon”
                </li>
                <li className='mb-1'>
                Pobudzenie aktywności lokalnej w gminie nowinka i powiecie sejneńskim" – koordynowaliśmy realizację doradztwa i szkoleń w projekcie.
                </li>
                <li className='mb-1'>
                Pobudzenie aktywności lokalnej w powiecie suwalskim" " – koordynowaliśmy realizację doradztwa i szkoleń w projekcie.
                </li>
                <li className='mb-1'>
                Wspieraliśmy osoby fizyczne będące w szczególnej sytuacji życiowej dofinansowując możliwość uczestnictwa tych osób w szkoleniach w ramach projektów w których te osoby uczestniczyły. 
                </li>
                <li className='mb-1'>
                W ramach projektu „AZYMUT na kompetencje” organizowaliśmy szkolenia z zakresu:
                <ul>
                  <li>
                  Pracy na stanowisku administracyjno-biurowym
                  </li>
                  <li>
                  Obsługi komputera w zakresie programów biurowych (MS WORD, EXCEL, POWERPOINT)
                  </li>
                  <li>
                  Obsługi komputera w zakresie obróbki filmów
                  </li>
                  <li>
                  Organizatora turystyki wraz ze szkoleniem obsługi dronów VLOS
                  </li>
                </ul>
                </li>
                <li className='mb-1'>
                W ramach projektu "Wsparcie zawodowe skuteczną integracją" rozpoczęliśmy przeprowadzanie kursów zawodowych dla 48 osób oraz w ramach bliźniaczego projektu podjęliśmy te same działania w celu przeszkolenia 47 osób.
                </li>
                <li className='mb-1'>
                Rozpoczęliśmy organizację zajęć w ramach projektu „Pobudzenie aktywności lokalnej – rozwój lokalnego rzemiosła” w obszarze powiatów: augustowski, gminy Lipsk, Sztabin Powiat sokólski, gminy: Suchowola, Dąbrowa Białostocka, Nowy Dwór, Janów, Korycin
                </li>
                <li className='mb-1'>
                Rozpoczęliśmy organizację zajęć w ramach projektu „Pobudzenie aktywności lokalnej – powrót do tradycji w gastronomii i rzemiośle” w obszarze powiatów: augustowski, gminy Lipsk, Sztabin Powiat moniecki, gminy: Goniądz, Jaświły, Trzcianne, Mońki
                </li>
              </ol>
              <p>Rozpoczęliśmy organizację zajęć w ramach projektu „Lokalna aktywizacja – powrót do tradycji w gastronomii i rzemiośle” w obszarze powiatów: grajewski, gminy Wąsosz, Radziłów, Szczuczyn i Powiat łomżyński, gminy: Przytuły, Jedwabne.</p>
              <p>2021 r. był trzecim rokiem naszej działalności, poświęciliśmy go na realizację celów statutowych.  Wspólnie z partnerami realizowaliśmy następujące działania projektowe</p>
              <ol>
                <li className='mb-1'>
                Kontynuowaliśmy i zakończyliśmy organizację i przeprowadzenie kursów zawodowych dla 47 osób w ramach projektu „Aktywna Integracja Inspiracją do Działania"
                </li>
                <li className='mb-1'>
                Kontynuowaliśmy i zakończyliśmy organizację i przeprowadzenie kursów zawodowych dla 48 osób w ramach projektu „Wsparcie Zawodowe Skuteczną Integracją"
                </li>
                <li className='mb-1'>
                W ramach projektu „Drewno woda i przygoda” organizowaliśmy i przeprowadzaliśmy kurs Event Manager dla 30 osób w którego zakres wchodziło:
                <ul>
                  <li>
                  Kurs lotów dronem
                  </li>
                  <li>
                  Kurs lotów dronem
                  </li>
                  <li>
                  Kurs lotów dronem
                  </li>
                </ul>
                </li>
                <li>
                W ramach projektu „Stawiamy na Turystykę Warmii i Mazur”, rozpoczęliśmy organizację i przeprowadzanie kursów:
                <ul>
                  <li>
                  W ramach projektu „Stawiamy na Turystykę Warmii i Mazur”, rozpoczęliśmy organizację i przeprowadzanie kursów
                  <ul>
                    <li>
                    Kurs lotów dronem
                    </li>
                    <li>
                    Kurs lotów dronem
                    </li>
                    <li>
                    Kurs event manager
                    </li>
                  </ul>
                  </li>
                  <li>
                  Kurs event manager
                  </li>
                  <li>
                  Kurs Baristyczny dla 84 osób
                  </li>
                </ul>
                </li>
              </ol>
             </p>}
          </div>
          {isActiver &&
            <Col className='d-flex justify-content-center'>
              <Pracownik name={Hanna.name} image={Hanna.photo} function={Hanna.function} />
            </ Col>
          }

            {isActivez &&
              <Row className='d-flex justify-content-center'>
                <Col className='d-flex justify-content-center'>
                  <Pracownik className='my-3' name={Magdalena.name} image={Magdalena.photo} function={Magdalena.function} />
                </ Col>
                <Col className='d-flex justify-content-center'>
                  <Pracownik name={Marcan.name} image={Marcan.photo} function={Marcan.function} />
                </Col>
              </ Row>
            }
        </Col>
      </Row>
    </div>
  );
};

export default Ofundacji;
