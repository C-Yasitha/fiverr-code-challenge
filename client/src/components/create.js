import React, { useState,useEffect } from "react";
import env from "react-dotenv";
import axios from 'axios';
import { useNavigate } from "react-router";
import { InputFieldForm,MultiSelectFieldForm } from './FormElements'

export default function Create() {

    const [allSectors, setAllSectors] = useState([])
    const [name, setName] = useState('')
    const [sectors, setSectors] = useState([])
    const [is_agree, setAgree] = useState(false)

    useEffect(() => {
        axios.get(`${env.API_PATH}/parent-sectors`)
          .then(res => {
            const persons = res.data;
            setAllSectors(persons);
          })
    },[])

    const submitForm = async event => {
        event.preventDefault()

        //save the user
        axios.post(`${env.API_PATH}/employees`,{ name,sectors,is_agree })
          .then(res => {
                const employee = res.data;
                //console.log(employee);
                sessionStorage.setItem("current_user", employee._id);
                alert('created');
            })
          .catch(error => {
                console.log(error.response.data.errors)
            })
    }

    const handleChangeSelection = e => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        // console.log(value);
        setSectors(value);
    }

    const handleChangeAgree = e => {
        let isChecked = e.target.checked;
       // console.log(isChecked);
        setAgree(isChecked);
    }

    return(
        <> 
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
               Create
            </h4>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h5 className="mb-4 text-gray-600 dark:text-gray-300">
                    Please enter your name and pick the Sectors you are currently involved in.
                </h5>
                <form onSubmit={submitForm}>
                    <InputFieldForm
                        label="Name"
                        placeholder="Type your name here"
                        onChange={event => setName(event.target.value)}
                        required
                    />

                    <MultiSelectFieldForm
                        label="Sectors"
                        options={allSectors}
                        onChange={handleChangeSelection}
                        required
                    />

                    <div className="flex mt-6 text-sm">
                        <label className="flex items-center dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                            onChange={handleChangeAgree}
                            required
                        />
                        <span className="ml-2">
                            I agree to the
                            <span className="underline"> terms</span>
                        </span>
                        </label>
                    </div>

                    <div>
                        <button className="px-10 py-4 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                type="submit">
                            Create
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}