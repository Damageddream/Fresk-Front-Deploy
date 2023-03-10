import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';


const Kontakt = () => {

  //states for loading when fetching data and catching errors from fetching
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //state for storing data from form before submit 'on change'
  const [form, setForm] = useState({
    conForm: "",
    email: "",
    name: "",
  });

  //state for success submiting form
  const [success, setSuccess] = useState(false)

  //state for placeholders in form
  const [pholders, setPholders] = useState({
    conForm: '...',
    email: 'Wpisz email....',
    name: 'Nazwa...',
  })

  //catching data from onchange - conForm and updating form
  const handleConFormChange = (e) => {
    setForm({
      ...form,
      conForm: e.target.value,
    })
  };
  //catching data from onchange - email and updating form
  const handleEmailChange = (e) => {
    setForm({
      ...form,
      email: e.target.value,
    })
  };
  //catching data from onchange - email and updating form
  const handleNamelChange = (e) => {
    setForm({
      ...form,
      name: e.target.value,
    })
  };



  //passing data from form into FormData
  let formForm = new FormData()

  formForm.append('conForm', form.conForm)
  formForm.append('email', form.email)
  formForm.append('name', form.name)

  // function for posting all data from form into backend
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault()
    setSuccess(false)

    axios({
      method: 'POST',
      url: 'https://fundacja-fresk.pl/api/contact/',
      data: formForm,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      setIsLoading(false);
      setSuccess(true)
      setForm({
        conForm: "",
        email: "",
        name: "",
      })      
    })

  }


  return (
    <Row>
      <iframe
        title="fundacja"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9357.682617757038!2d22.932121!3d54.1017465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d0730236e90f4d3!2sFundacja%20Rozwoju%20Edukacji%20i%20Spo%C5%82ecznej%20Kreatywno%C5%9Bci!5e0!3m2!1spl!2spl!4v1675678722371!5m2!1spl!2spl"
        width="auto"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Row>
        <Col className="mt-5 ms-5 ps-5">
          <Row className="justify-content-center">
            <Col>
              <h4 className='mb-3'>Dane</h4>

            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className='mb-3 fw-bold'>Fundacja Rozwoju Edukacji i Spo??ecznej Kreatywno??ci</h6>
              <p><div className='fw-bold'>Adres</div> Noniewicza 34 lok.4 16-400 Suwa??ki</p>
              <p><div className='fw-bold'>Mail</div> kontakt.fresk@gmail.com</p>
              <p><div className='fw-bold'>Telefon</div> 661 300 803</p>
              <p><div className='fw-bold'>NIP</div> 6572174750</p>
              <p><div className='fw-bold'>REGON</div> 383642931</p>
              <p><div className='fw-bold'>KRS</div> 0000790916</p>
              <p><div className='fw-bold'>Numer konta</div> </p>

            </Col>
          </Row>
        </Col>

        <Col md={6} className="d-flex justify-content-center mt-5" >
          <Form className="w-75">
            <h4 className='mb-3'>Skontakuj si?? z nami</h4>
            <Form.Group className="mb-3" controlId="mail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder={pholders.email}
                value={form.email}
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="nazwa">
              <Form.Label>Imi?? i nazwisko / nazwa organizacji</Form.Label>
              <Form.Control
                type="text"
                value={form.name}
                placeholder={pholders.name}
                onChange={(e) => {
                  handleNamelChange(e);
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tekst">
              <Form.Label>Tre????</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                value={form.conForm}
                placeholder={pholders.conForm}
                onChange={(e) => {
                  handleConFormChange(e);
                }} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Wy??lij
            </Button>
            {success && <Alert className='mt-2' variant={'success'}>Wys??ano informacj??, dzi??kujemy</Alert>}
          </Form>
        </Col>
      </Row>
    </Row>
  );
};

export default Kontakt;
