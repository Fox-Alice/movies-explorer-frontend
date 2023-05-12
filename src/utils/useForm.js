import { useState, useCallback } from 'react';
import {omit} from 'lodash'

const useForm = (callback) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);


    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'name':
                if(value.length < 4){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        name:'Username atleast have 5 letters'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "name");
                    setErrors(newObj);
                    
                }
                break;
        
            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email address'
                    })
                }else{

                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                    
                }
            break;
            
            case 'password':
                if(
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password:'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                }else{

                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                    
                }
            break;
            
            default:
                break;
        }
    }

    const handleChange = (event) => {
        event.persist();

        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        validate(event, name, value);

        setValues({...values, [name]: value});
        if (target.validationMessage)
        {setErrors({...errors, [name]: target.validationMessage })};
        setIsValid(target.closest("form").checkValidity());
        // console.log(isValid.name);
    
    }

    // const handleSubmit = (event) => {
    //     if(event) event.preventDefault();

    //     if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
    //         callback();

    //     }else{
    //         alert("There is an Error!");
    //     }
    // }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
          setValues(newValues);
          setErrors(newErrors);
          setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
      );
    
      return { values, handleChange, errors, isValid, resetForm };    
    }
    
    export default useForm