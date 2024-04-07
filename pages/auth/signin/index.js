import { useState } from 'react';
import Cookies from 'js-cookie';
import { Container, Form, Button } from 'react-bootstrap';

function SignIn() {
  const [inputPassword, setPassword] = useState('');
  const [inputEmail, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputEmail,
        inputPassword,
      }),
    }).then(response => response.json())
    .then(data => {
      // 'data' contains the response from the backend
      const token = data.token; // Access the token sent from the backend
      if(token) {
        Cookies.set('authToken', token ); // Set expiry for 7 days
        
        window.location.href = '/auth/post-articles';
      }
    })
    .catch(error => {
      alert('Wrong password or email');
      console.error('Error:', error);
    });

  };
  
    return (
        <>
            <Container style={{margin: "50px"}}>
                <div className='SignIn' style={{paddingBottom: "50px"}}>
                    <div className='SignInPage'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={inputEmail}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={inputPassword}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            
                            <Button variant="primary" style={{backgroundColor: "transparent", color: "black", borderColor: "#c1f036"}} type="submit">
                                Sign In
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default SignIn;
