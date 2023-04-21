import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../style/login.css";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { auth } from '../firebase.config';
import { db } from '../firebase.config';
import { storage } from '../firebase.config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on((error) => {
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (dowloadURL) => {

          // update user profile
          await updateProfile(user, {
            displayName: username,
            photoURL: dowloadURL
          });

          // store user data firestore database

          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: dowloadURL
          });

        });
      });

      setLoading(false);
      toast.success("Account created successfully");
      navigate('/login');

    } catch (error) {
      setLoading(false);
      toast.error("somethig went worng")
    }
  }

  return (
    <Helmet title="signup">
      <section>
        <Container>
          <Row>
            {
              loading?<Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading ...</h5>
              </Col> :             <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">
                Signup
              </h3>
              <Form className="auth_form" onSubmit={signup}>
                <FormGroup className="form_group">
                  <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="email" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="password" placeholder='Enter your password' value={password} onChange={e => SetPassword(e.target.value)} />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="file" onChange={e => setFile(e.target.files[0])} />
                </FormGroup>
                <button type='submit' className="buy_btn login_btn">Create an Account</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </Form>
            </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

export default Signup