import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';



export default function BasicExample() {
  return (


<Container style={{width:300, paddingTop:40}}>
  <Form>
    <Form>Login</Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Senha</Form.Label>
  <Form.Control type="password" placeholder="" />
  </Form.Group>
  <Button variant="primary" type="submit">Salvar </Button>
  </Form>
  </Container>
  );
}