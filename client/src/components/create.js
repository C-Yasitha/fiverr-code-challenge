import React, { useState } from "react";
import { useNavigate } from "react-router";
import { InputFieldForm } from './FormElements'

export default function Create() {
    return(
        <> 
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
               Create
            </h4>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h5 className="mb-4">
                    Please enter your name and pick the Sectors you are currently involved in.
                </h5>
                <InputFieldForm
                    label="Name"
                    placeholder="Type your name here"
                />

            </div>
        </>
    )
}