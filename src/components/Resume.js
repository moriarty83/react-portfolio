import React, { useState } from 'react';
import PDF from './PDF';
import Title from './Title';

function Resume (){
    return(
    <>
    <Title title="Resume" />
    <PDF />
    </>
    )
}

export default Resume;