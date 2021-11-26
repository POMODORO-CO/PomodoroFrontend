import {useRef, useState} from 'react';


const useFormData =(initial)=>{
    const form = useRef(initial);
    const [formData, setFormData]=useState({});
    const getFormData=()=>{
    };
    const updateFormData=()=>{
        setFormData(getFormData());
    };
    return {form, formData, updateFormData};
};
export default useFormData;