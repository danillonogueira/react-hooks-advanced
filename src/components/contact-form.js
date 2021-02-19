import React, { useState, useContext } from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';
import _ from 'lodash';
import { ContactContext } from './../contexts/contact-context';

// Function that composes the input handler
const useInputHandler = function(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    return setValue(e.target.value);
  }

  const handleReset = () => {
    setValue('');
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset
  };
}

export default function ContactForm() {
  const nameInputHandler = useInputHandler('');
  const emailInputHandler = useInputHandler('');
  const [state, dispatch] = useContext(ContactContext);

  const onSubmit = () => {
    dispatch({
      type: 'ADD_CONTACT',
      payload: { 
        id: _.uniqueId(10), 
        name: nameInputHandler.value,
        email: nameInputHandler.value
      }
    });
    nameInputHandler.onReset();
    nameInputHandler.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            {/* 
              For better understanding of the use of the spread operator here, 
              please check: https://reactjs.org/docs/jsx-in-depth.html#spread-attributes 
            */}
            <Input placeholder="Enter Name" {...nameInputHandler} required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Enter Email" {...emailInputHandler} type="email" required />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              New Contact
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}
