import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projekt from "./projekt";
import dron from "../../images/dron.jpg";
import bar from "../../images/bar.jpg";
import barista from "../../images/barista.jpg";
import zlobek from "../../images/zlobek.jpg"


const projekty = [{
    id: '1',
    title: 'Event Manager z Dronami',
    photo: dron,
    date: "zapisy wstrzymane"
},
{
    id: '2',
    title: 'Kurs Barmański',
    photo: bar,
    date: "zapisy trwają, (Warmińsko-Mazurskie)"
},
{
    id: '3',
    title: 'Kurst Baristyczny',
    photo: barista,
    date: "zapisy trwają, (Warmińsko-Mazurskie)"
},
{
    id: '4',
    title: 'Szkolenie - zakładanie żlobka',
    photo: zlobek,
    date: "zapisy trwają, (Pomorskie i Kujawsko-Pomorskie)",
    link: 'http://www.frr.org.pl/zlobki/'
},
]

const ProjektyList = () => {
    return (
        <Row className='justify-content-md-center'>
            {projekty.map((projekt) => (
                <Col sm='12' md='12' lg='6'>
                    <Projekt 
                    key={projekt.id}
                    title={projekt.title}
                    photo={projekt.photo}
                    date={projekt.date}
                    link={projekt.link}
                    />
                </Col>
            ))}

        </Row>
    )
}

export default ProjektyList