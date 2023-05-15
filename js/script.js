// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: May 2023
// This file contains the JS functions for index.html

function myButtonClicked () {
  const numberA = parseInt(document.getElementById('number-a').value)
  const numberB = parseInt(document.getElementById('number-b').value)
  let remainder = numberA
  let answer = 0

  while (remainder > numberB) {
    remainder -= numberB
    answer++
  }

    if (remainder > 0) {
    document.getElementById('answer').innerHTML = 'The answer is ' + answer + ' with a remainder of ' + remainder + "."
  } else {
  document.getElementById('answer').innerHTML = 'The answer is ' + answer + "." + ' There is no remainder.'
  }
}