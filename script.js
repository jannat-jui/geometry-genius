// function calculate(){
//     const triangleBaseInputField = document.getElementById('triangle-base');
//     const triangleBaseValueString = triangleBaseInputField.value;
//     const triangleBaseValue = parseFloat(triangleBaseValueString);

    
//     const triangleHeightInputField = document.getElementById('triangle-height');
//     const triangleHeightvalueString = triangleHeightInputField.value;
//     const triangleHeightvalue = parseFloat(triangleHeightvalueString);

//     const Area = 0.5 * triangleBaseValue * triangleHeightvalue;
//     console.log(Area)
// }

function calculateTriangle(){
    const trainglebase = getInputFieldValue('triangle-base');
    const traingleheight = getInputFieldValue('triangle-height');
    const area = 0.5 * trainglebase * traingleheight;

    if(isNaN(trainglebase) || isNaN(traingleheight)){
        alert('please enter numbers');
        return;
    }
    setOutput('area-result1' ,area);
    addtoCalculationOutput('Triangle', area);
}

function calculateRectangle(){
    const rectangleW = getInputFieldValue('rectangle-width');
    const rectangleL = getInputFieldValue('rectangle-length');
    const area = rectangleW * rectangleL;

    if(isNaN(rectangleW) || isNaN(rectangleL)){
        alert('please enter numbers');
        return;
    }
    setOutput('area-result2', area);
    addtoCalculationOutput('Rectangle', area);
}

function calculateParallelogram(){
    const parallelogramBase = getInputFieldValue('parallelogram-base');
    const parallelogramHeight = getInputFieldValue('parallelogram-height');
    const area = parallelogramBase * parallelogramHeight;

    if(isNaN(parallelogramBase) || isNaN(parallelogramHeight)){
        alert('please enter numbers');
        return;
    }
    setOutput('area-result3', area);
    addtoCalculationOutput('Parallelogram', area);
}


function calculateRhombus(){
    const d1 = getInputFieldValue('d1');
    const d2 = getInputFieldValue('d2');
    const area = 0.5 * d1 * d2;

    if(isNaN(d1) || isNaN(d2)){
        alert('please enter numbers');
        return;
    }
    setOutput('area-result4', area);
    addtoCalculationOutput('Rhombus', area);
}

function calculatePentagon(){
    const pentaP = getInputFieldValue('penta-p');
    const pentaB = getInputFieldValue('penta-b');
    const area = 0.5 * pentaP * pentaB;

    if(isNaN(pentaP) || isNaN(pentaB)){
        alert('please enter numbers');
        return;
    }
    setOutput('area-result5', area);
    addtoCalculationOutput('Pentagon', area);
}

function calculateEllipse(){
    const elipseA = getInputFieldValue('elipse-a');
    const elipseB = getInputFieldValue('elipse-b');
    const areaaa = 3.14 * elipseA * elipseB;
    const area = areaaa.toFixed(2);

    if(isNaN(elipseA) || isNaN(elipseB)){
        alert('please enter numbers');
        return;
    }
    setOutput('area-result6', area);
    addtoCalculationOutput('Ellipse', area);
}









function getInputFieldValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);

    inputField.value='';
    return inputFieldValue;
    
}
function setOutput(resultid, area){
 const output = document.getElementById(resultid);
 output.innerText = area;
}
function addtoCalculationOutput(areaType, area){

    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.classList.add('pl-[2rem]');
    p.innerHTML=`${count+1}. ${areaType} ${area} cm <sup>2</sup><button class="btn btn-primary ml-6 bg-[#1090D8] w-[8.875rem] h-[2rem] rounded-lg border-none text-white inter text-sm capitalize">convert to m<sup>2</sup></button>`;
    calculationEntry.appendChild(p);

}