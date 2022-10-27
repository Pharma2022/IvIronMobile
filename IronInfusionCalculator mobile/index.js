// javascript

const height=document.getElementById("height")
const bodyWeight = document.getElementById("body-weight")
const targetHb=document.getElementById("target-hb")
const actualHb= document.getElementById("actual-hb")
const calculateDose= document.getElementById("calculate-dose")
const renderDose=document.getElementById("render-dose")
        let myfactor= "" 
const reset= document.getElementById("reset")
const male = document.getElementById("male")
const female = document.getElementById("female")
const cosmofer=`Cosmofer`
const monofer=`Monofer`
const ferinject =`Ferinject`
const trademark=`<h3 class="red"><sup>&reg;</sup> </h3>`
let ferinjectMessage=""
let gl=`g/L`
let actual=`Actual Hb: `
let target=`Target Hb: `
male.addEventListener("click",function(e){
    e.preventDefault()
           myfactor=50
            female.style.backgroundColor="white"
            female.style.color=  "darkslategray"
            female.style.textShadow= " 0px 0px 0px black"
                male.style.backgroundColor="darkslategray"
                male.style.color= "white"
                male.style.textShadow= " 0px 0px 4px black"})
        
female.addEventListener("click",function(e){
    e.preventDefault()
           
          myfactor=45.5
            male.style.backgroundColor="white"
            male.style.color=  "darkslategray"
            male.style.textShadow= " 0px 0px 0px black"
                female.style.backgroundColor="darkslategray"
                female.style.color= "white" 
                female.style.textShadow= " 0px 0px 4px black" 
}
)



      function calculate(ironPrep){
           
                let patientHeight = JSON.parse(height.value)
                let patientWeight= JSON.parse(bodyWeight.value)
                let patientTargetHb= JSON.parse(targetHb.value)
                let patientActualHb= JSON.parse(actualHb.value)
                let myIron=ironPrep
                let factor=myfactor
        
                if(ironPrep==="Monofer"||"Cosmofer"){
                        
          gl=`g/L`
          actual=`Actual Hb: `
        target=`Target Hb: `} else{
                target=""
            patientTargetHb=""
            gl=""
                
        }
                
        
  if ((patientHeight>=152&&patientHeight<=200)&&(patientWeight>=25&&patientWeight<=90)&&(patientTargetHb>=110&&patientTargetHb<=150&&patientTargetHb>=patientActualHb+10)&&(patientActualHb>=50&&patientActualHb<=150)&&(myIron= "Cosmofer"||"Monofer"||"Ferinject"))

    {    
        function render(){  renderDose.innerHTML=""
                renderDose.innerHTML= `
                
                <h3><div> Calculated dose: for <span class= "finalCalc">${ironPrep}</span>${trademark}        ${target}<span> ${patientTargetHb}</span>  ${gl}    ${actual}<span> ${patientActualHb}</span>  g/L.<div>${ferinjectMessage}</div> </h3></div> 
                <h4><div >Total Iron required is <span class= finalCalc>${(finalCalculation)}mg</span>, using ${modifier} weight: ${finalWeight}kg.</div></h4>
              
               <h4 id="box">${testdose}</h4>
                <h4 id="box"> ${message} </h4> 
                <h4 id="box"> Please ensure that the patient is monitored for the duration of the infusion and 30 minutes after for adverse effects. Prescribe the following medications for the event of adverse reactions:
                <li>IV Chlorphenamine 10mg up to QDS PRN</li>
                <li>IV Hydrocortisone 100mg up to 500mg/24 hours</li>
                <li>IM Adrenaline 1 in 1000 PRN</li> </h4>
                 
                `}
        
        let bmi= patientWeight*10000/(patientHeight*patientHeight)
                  
           
                   
        let ibw= factor + ((height.value-152)/2.54)*2.3.toFixed(0)
        let ddw= ibw+ 0.4*(patientWeight-ibw)
      
        let finalWeight = 0 
        let modifier= " actual"
       
        if (bmi<25){
            finalWeight=patientWeight.toFixed(0)
            modifier=" actual body"
           
        } 
        else if (bmi>24.9 && bmi<30){
            finalWeight=ibw.toFixed(0) 
            modifier=" ideal body"
           
        } else if (bmi>30){
            finalWeight=ddw.toFixed(0)
            modifier=" adjusted body" }
        else{  finalWeight=patientWeight  
                     modifier=" actual body"}
        
        let calculation = Math.round((0.24*finalWeight*(patientTargetHb-patientActualHb)).toFixed(0) / 100) * 100
       
        if (JSON.parse(calculation)>1700){
            calculation="1700"}
        
        
         let ironstore= 500
        if (patientWeight<35){ironstore=Math.round(patientWeight*15/ 100) * 100;
       }
        
        
        let finalCalculation =(Math.round((JSON.parse(calculation) / 100) * 100))+ironstore
       
        let firstInfusion = ""
        let secondInfusion= ""
        let message=""
        let testdose=""
        if (ironPrep=="Cosmofer"){
            testdose= `The first <span class = finalCalc>25mg</span> of the first infusion needs to be given as a <span class= finalCalc>test dose</span> over 15 minutes.`
        } 
        
      
        if (finalWeight.value>90){
            finalWeight=90
        }
        

        
        if (finalWeight*20<finalCalculation)
            {firstInfusion= Math.floor(finalWeight*20 / 100) * 100
            if (finalWeight.value>90){
            finalWeight=90 }
          
            secondInfusion= finalCalculation-firstInfusion
            if (secondInfusion>firstInfusion){
                const mySecond= secondInfusion
                const myFirst= firstInfusion
                firstInfusion=mySecond
                secondInfusion= myFirst
                
            }
            
            
            
            if (ironPrep=="Cosmofer"&&secondInfusion>=100){
            message = ` <div>
        
            <li> First infusion: <span class= "finalCalc">${firstInfusion}mg</span></li><li>Second infusion: <span class ="finalCalc">${secondInfusion}mg</span></li>
            
           <h5> Add the required quantity for each infusion to 500ml 0.9% Sodium Chloride.</h5>
           <h5> After giving the test dose , give over 4-6 hours</h5>
           <h5> Leave a minimum of <span> one week</span> between the first and second infusions </h5>
            </div>`}
            else  if (ironPrep=="Cosmofer"&&secondInfusion<100){
                finalCalculation=firstInfusion-100
             message=`<div> <div id="single">A single infusion of <span class ="finalCalc">${finalCalculation}mg</span> is required.</div>
          
          <h5> Add to 500ml 0.9% Sodium Chloride.</h5>
           
           <h5> After giving the test dose , give the remainder of the infusion over 4-6 hours</h5>
            
           </div> `} 
            
            if (ironPrep=="Monofer"&&secondInfusion>=100){
            message = ` <div>
        
            <li> First infusion: <span class ="finalCalc">${firstInfusion}mg</span></li>
            <li> Second infusion: <span class ="finalCalc">${secondInfusion}mg</span></li>
           <h5> Add the required quantity for each infusion to 100ml 0.9% Sodium Chloride.</h5>
           <h5> Give over 30minutes</h5>
           <h5> Leave a minimum of <span> one week</span> between the first and second infusions </h5>
            </div>`
            testdose=`No test dose is required`
            }
           else if (ironPrep=="Monofer"&&secondInfusion<100){
               finalCalculation=firstInfusion-100
                message=`<div> <div id="single">A single infusion of <span class ="finalCalc">${finalCalculation}mg</span> is required.</div>
           
          <h5> Add to 100ml 0.9% Sodium Chloride.</h5>
           
           <h5> Give over 30 minutes</h5>
            
           </div> `
            testdose=`No test dose is required`    
           }
            } 
        else{ firstInfusion= finalCalculation
            testdose= ` The first <span class= "finalCalc"> 25mg</span> of this infusion is to be given as a <span class="finalCalc">test dose</span> over 15 minutes.`
            
              if (ironPrep=="Cosmofer"){
            
            message=`<div> <div id="single">A single infusion of <span class="finalCalc">${finalCalculation}mg </span> is required.</div>
           
          <h5> Add to 500ml 0.9% Sodium Chloride.</h5>
           
           <h5> After giving the test dose , give the remainder of the infusion over 4-6 hours</h5>
            
           </div> `} 
         
           
             if (ironPrep==="Monofer" || ironPrep==="Ferinject") 
        {
            testdose= `No test dose is required`
               if(ironPrep==="Monofer"){
                
            message=`<div> <div id="single">A single infusion of <span class ="finalCalc">${finalCalculation}mg</span> is required.</div>
           
          <h5> Add to 100ml 0.9% Sodium Chloride.</h5>
           
           <h5> Give over 30 minutes</h5>
            
           </div> `
            }
           
        }
            
            
                  
            }
            
                   
if(ironPrep==="Ferinject")


{
            testdose="No test dose is required"
            
            ferinjectMessage=`Please note, <span class = "finalCalc">total iron</span> calculated with <span class="finalCalc">dose banding</span> and <span>not</span> with <span class="finalCalc">target Hb</span>.`
            let minutes =""
            let volume = ""
            let firstVolume=""
            let firstTime=""
             let secondVolume=""
            let secondTime=""
            let thirdVolume=""
            let thirdTime=""
            let thirdInfusion=100
        
            function ferinjectMessageSingle(){
            
                if (finalCalculation<=200)
                    {volume =50
                    minutes = 6}
                
                else if (finalCalculation>200&&finalCalculation<=500)
                    {volume = 100
                    minutes = 6}
                
                if (finalCalculation>500)
                    { volume = 250
                    minutes = 15}
                
                message=`<div> <div id="single">A single infusion of <span class="finalCalc">${finalCalculation}mg</span> is required.</div>
                    
                        <h5> Add to maximum ${volume}ml 0.9% Sodium Chloride.</h5>
                    
                        <h5> Give over a minimum of ${minutes} minutes</h5>
                        </div>` }
            
            
            function ferinjectInfusionDouble()
                {if (firstInfusion<=200)
                    {firstVolume =50
                    firstTime = 6}
                
                else if (firstInfusion>200&&firstInfusion<=500)
                    {firstVolume = 100
                    firstTime = 6}
                
                if (secondInfusion>500)
                    { secondVolume = 250
                    secondTime = 15}
                   if (secondInfusion<=200)
                    {secondVolume =50
                    secondTime = 6}
                
                 if (secondInfusion>200&&secondInfusion<=500)
                    {secondVolume = 100
                    secondTime = 6}
                
                if (firstInfusion>500)
                    { firstVolume = 250
                    firstTime = 15}
                
                 message = ` <div>
                        <li>First infusion: <span class="finalCalc">${firstInfusion}mg</span></li><li>Second infusion: <span class="finalCalc">${secondInfusion} mg</span></li>
                        
                    <h5> Add the first infusion of ${firstInfusion} mg to a maximum of ${firstVolume} Sodium Chloride. Give over a minimum ${firstTime} minutes</h5>
                    <h5> Leave a minimum of <span> one week</span> between the first and second infusions. </h5>
                    <h5> Add the second infusion of ${secondInfusion}mg to a maximum of ${secondVolume}ml Sodium Chloride. Give over a minimum ${secondTime} minutes</h5> </div>`}
                
             
             function ferinjectInfusionTriple()
                    {ferinjectInfusionDouble()
                    if (thirdInfusion>500)
                    { thirdVolume = 250
                    thirdTime = 15}
                   if (thirdInfusion<=200)
                    {thirdVolume =50
                    thirdTime = 6}
                
                 if (thirdInfusion>200&&thirdInfusion<=500)
                    {thirdVolume = 100
                    thirdTime = 6}
                    
                    
                    
                    message =` <li> First infusion: <span class="finalCalc"> ${firstInfusion}mg</span></li><li> Second infusion: <span class="finalCalc"> ${secondInfusion}mg</span></li><li>Third infusion:<span class="finalCalc"> ${thirdInfusion}mg</span></li>
                        
                    <h5> Add the first infusion of ${firstInfusion} mg to a maximum of ${firstVolume}ml Sodium Chloride. Give over a minimum ${firstTime} minutes</h5>
                    <h5> Leave a minimum of <span> one week</span> between the first and second infusions and third infusions. To avoid using three infusions, please consider Monofer<sup>&reg;</sup> or Cosmofer<sup>&reg;</sup> </h5>
                     <h5> Add the second infusion of ${secondInfusion}mg to a maximum of ${secondVolume}ml Sodium Chloride. Give over a minimum ${secondTime} minutes</h5>
                     <h5> Add the third infusion of ${thirdInfusion}mg to a maximum of ${thirdVolume}ml Sodium Chloride. Give over a minimum ${thirdTime} minutes</h5> </div>`   }
                
                
                
                 
            if(finalWeight<35||patientActualHb>=140)
                {finalCalculation= 500
                
                   message=`<div> <div id="single">A single infusion of <span class="finalCalc">${finalCalculation}mg</span> is required.</div>
                    
                        <h5> Add to maximum ${volume}ml 0.9% Sodium Chloride.</h5>
                    
                        <h5> Give over a minimum of ${minutes} minutes</h5>
                        </div>`
                        ferinjectMessageSingle()}
          
                
                if (patientActualHb<=100)
            
                {   if (finalWeight>=35&&finalWeight<70)
                        { finalCalculation=1500
                            firstInfusion=1000
                            secondInfusion=500
                    if(finalWeight>=38&&finalWeight<40)
                    {firstInfusion=750
                    secondInfusion=750}
                    if(finalWeight>=40&&finalWeight<50)
                    {firstInfusion=800
                    secondInfusion=700}
                    ferinjectInfusionDouble()}
                    
                    if(finalWeight>=35&&finalWeight<38){
                        firstInfusion=700
                        secondInfusion=700
                       thirdInfusion=100          
                        ferinjectInfusionTriple()}   
                        
                         
                    
                    if (finalWeight>=70)
                        {finalCalculation=2000
                        firstInfusion= 1000
                        secondInfusion=1000
                        ferinjectInfusionDouble()}
                
                
                }
                              
            if (patientActualHb>100&&patientActualHb<140){
                
                
                            if(finalWeight>=35&&finalWeight<=39)
                                    { firstInfusion= 700
                                    secondInfusion=300}
                                    
                            if(finalWeight>=40&&finalWeight<=44)
                                        { firstInfusion = 800
                                        secondInfusion= 200}  
                                        
                            if(finalWeight>=45&&finalWeight<=49)
                                        { firstInfusion=900
                                        secondInfusion=100} 
                                        
                            if (finalWeight>=35&&finalWeight<70)
                               
                                {finalCalculation=1000
                                      if (finalWeight>=35&&finalWeight<=49)
                                         { ferinjectInfusionDouble()  }
                                        if (finalWeight>=50&&finalWeight<70)
                                        {ferinjectMessageSingle()}  
                                                         }
                                
                            if (finalWeight>=70)
                            {finalCalculation=1500
                                 firstInfusion= 1000
                                     secondInfusion=500
                            ferinjectInfusionDouble()}
                      
                                   
                    
                      }
                            
        }

         
        render()
                

    }

    
else {
function renderError(){  renderDose.innerHTML=""
                renderDose.innerHTML= `
                
                <h3><div> You have selected values outside the range(s)! </h3></div> 
                
              
                <h4 id="box">Please ensure all the values are correctly filled to meet the <span class ="finalCalc">maximum</span> and <span class ="finalCalc">minimum</span> parameters. Ensure you have clicked on a <span class ="finalCalc">gender</span>. Ensure that there is a <span class ="finalCalc">minimum 10g/L</span> difference between target Hb and actual Hb. If your patient's values fall <span class ="finalCalc">outside</span> the above ranges, enter the values within the range that are <span class="finalCalc">closest</span> to the patient values.</h4>
            
                 
                `}
        renderError()
}

  }
  
 

document.getElementById("cosmoferBtn").addEventListener("click",function (){
    
   
    calculate(cosmofer)

    document.getElementById("monoferBtn").style.backgroundColor="darkslategray"
    document.getElementById("ferinjectBtn").style.backgroundColor="darkslategray"
    document.getElementById("cosmoferBtn").style.backgroundColor="red"
    
console.log(myfactor)
   
    
    
})

document.getElementById("monoferBtn").addEventListener("click",function (){
   
    calculate(monofer)
   
    document.getElementById("monoferBtn").style.backgroundColor="red"
    document.getElementById("cosmoferBtn").style.backgroundColor="darkslategray"
    document.getElementById("ferinjectBtn").style.backgroundColor="darkslategray"
    
console.log(myfactor)
  
    
})

document.getElementById("ferinjectBtn").addEventListener("click",function (){
   
    calculate(ferinject)

    document.getElementById("ferinjectBtn").style.backgroundColor="red"
    document.getElementById("monoferBtn").style.backgroundColor="darkslategray"
    document.getElementById("cosmoferBtn").style.backgroundColor="darkslategray"

console.log(myfactor)
    
   
})
