<template >
    <section id="facultystaff" class="faculty">
        <div class="supercon">
            <div class="title">
                
                <h1>Faculty and Staff</h1>
            </div>
            <div class="dean">
                <p>Ma. Christina A. Quijano, MSCS</p>
                <div class = "image">
                    <img src = "@/assets/image/quijano.png">
                </div>
                 
            </div>
            <div class="dept">
                <h2>Department Head and Coordinators</h2>
            </div> 


            <div class="container">
                
                    
                    <div class="facultytxt">
                        <p>Rea P. Balontong, MBA</p>
                        <div class="image"><img src = "@/assets/image/balontong.jpg"></div>
                        <p>IT department</p>
                                   
                    </div>
                    <div class="facultytxt">
                        <p>Marjee Rose B. Parreño, MSCS, MBA</p>
                        <div class = "image">
                            <img src = "@/assets/image/parreno.jpg">
                        </div>
                        <p>IT department</p>
                    </div>

                    <div class="facultytxt">
                        <p>Ana Mae B. Cantel. MLIS</p>
                        <div class = "image">
                            <img src = "@/assets/image/cantel.jpg">
                        </div>
                        <p>BLIS department</p>
                    </div>
                    <div class="facultytxt">
                        <p>Lennon D. Pajar</p>
                        <div class = "image">
                            <img src = "@/assets/image/pajar.jpg">
                        </div>
                        <p>IT department</p>
                    </div>
            </div>
            <div class="dept">
                <h2>Faculty</h2>
            </div> 
                
                
                    
            <div class="container">
                
                    <div class="facultytxt">
                        <p>Leo Paulo B. Beldia</p>
                        <div class = "image">
                            <img src = "@/assets/image/beldia.jpg">
                        </div>
                        <p>IT department</p>
                    </div>
                    <div class="facultytxt">
                        <p>Pedro Peter Rhys B. Cambronero, MSCS</p>
                        <div class = "image">
                            <img src = "@/assets/image/cambronero.jpg">
                        </div>
                        <p>CS department</p>
                    </div>
                    <div class="facultytxt">
                        <p>Lesley Joy L. Dignadice, MBA</p>
                        <div class = "image">
                            <img src = "@/assets/image/dignadice.jpg">
                        </div>
                        <p>IT department</p>
                    </div>
                    <div class="facultytxt">
                        <p>Rodolfo C. Eregia, Jr.</p>
                        <div class = "image">
                            <img src = "@/assets/image/eregia.jpg">
                        </div>
                        <p>IT department</p>
                    </div>
                    <div class="facultytxt">
                        <p>Donie S. Jardeleza, MSCS</p>
                        <div class = "image">
                            <img src = "@/assets/image/jardleza.jpg">
                        </div>
                        <p>IT department</p>
                    </div>
                    <div class="facultytxt">
                        <p>Antonio M. Montaño, Jr</p>
                         <div class = "image">
                            <img src = "@/assets/image/montano.jpg">
                        </div>
                        <p>IT department</p>
                    </div>
                    <div class="facultytxt">
                        <p>Rose Leah Joy A. Ojacastro, MSCS</p>
                         <div class = "image">
                            <img src = "@/assets/image/ojacastro.jpg">
                        </div>
                        <p>IT department</p>
                    </div>
                    <div class="facultytxt">
                        <p>Ma. Sheila C. Sapul, Ph. D.r</p>
                        <div class = "image">
                            <img src = "@/assets/image/sapul.jpg">
                        </div>
                        <p>CS department</p>
                    </div>                
            </div>

            <div class="dept">
                <h2>Staff</h2>
                </div> 
            
            <div class="container">
                <div class="facultytxt">
                            <p>Chrislyn C. Castaño</p>
                            <div class = "image">
                            <img src = "@/assets/image/castano.jpg">
                        </div>

                        </div>
                        <div class="facultytxt">
                            <p>A.M.P. Latter P. Taasan</p>
                            <div class = "image">
                            <img src = "@/assets/image/taasan.jpg">
                        </div>
                        </div>
                        <div class="facultytxt">
                            <p>Chriselda Elaine Ador</p>
                            <div class = "image">
                            <img src = "@/assets/image/ador.jpg">
                        </div>
                        </div>
                        <div class="facultytxt">
                            <p>Donna May Rivera</p>
                            <div class = "image">
                            <img src = "@/assets/image/rivera.png">
                        </div>
                        </div>
                
            </div>    
        </div>
               
            
        
    </section>
</template>   


<style scoped>
.faculty {
    scroll-margin-top: 72px;
    padding: 56px 7%;
    background: #fff;
}

.supercon {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.title {
    text-align: center;
}

.title h1 {
    margin: 0;
    color: #183b2a;
    font-size: 32px;
}

.dean {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 16px 0;
    color: #183b2a;
    font-weight: 600;
}

.dept {
    padding: 12px 16px;
    border-bottom: 1px solid #dfe7df;
    color: #183b2a;
}

.dept h2 {
    margin: 0;
    font-size: 20px;
}

.container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
}

.facultytxt {
    display: flex;
    min-width: 0;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 16px 10px;
    border: 1px solid #e5eae5;
    border-radius: 6px;
    background: #f8faf8;
}

.facultytxt p,
.dean p {
    margin: 0;
    color: #44564a;
    font-size: 14px;
    text-align: center;
}

.image img {
    display: block;
    width: 100px;
    height: 120px;
    border-radius: 4px;
    object-fit: cover;
}

@media (max-width: 900px) {
    .container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 560px) {
    .faculty {
        padding: 40px 6%;
    }

    .title h1 {
        font-size: 27px;
    }

    .container {
        gap: 10px;
    }

    .image img {
        width: 88px;
        height: 105px;
    }
}
</style>