const express = require('express');
const mongoose = require("mongoose");

const mail = document.getElementById('mailtype');
const test = document.getElementById('test');


function showMail(){
    const data = mail.value;


    
    window.alert(data);
}

