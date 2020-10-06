import React from 'react';
import AlertMessage from 'src/components/AlertMessage';
import SimpleModal from 'src/components/Modal/SimpleModal';
import Header from 'src/components/Header';
import Menu from 'src/components/Menu';
import Footer from 'src/components/Footer';
import Body from 'src/components/Body';
import Container from 'react-bootstrap/Container';

const App = () => (
    <Container fluid className="p-0 h-100 d-flex flex-column">
        <Header />
        <Menu />
        <AlertMessage />
        <SimpleModal />
        <Body />
        <Footer />
    </Container>
);

export default App;
