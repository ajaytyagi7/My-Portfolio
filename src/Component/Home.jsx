import React from 'react'

const Home = () => {
  return (
    <div className='container-fluid'>
        <div className='container-fluid text-white'>
            
            <div className='row p-3'>
                <div className='col'><h1 className='fw-bold mt-2 '>Portfolio</h1></div>
                <div className='col row p-4'>
                <div className='col'><p>Home</p></div>
               <div className='col'><p>Service</p></div>
                <div className='col'><p>Project</p></div>
                <div className='col'><p>About</p></div>
                <div className='col'><p>Contact</p></div>
                </div>
              
            </div>
            

            <div className='row gx-1 ' style={{margin:50}}>
                <div className='col-md-6 '>
                    <h3  className='fw-bold'>Hello, it's Me</h3>
                    <h1  className='fw-bold 'style={{fontSize:80}} >Ajay Kumar <br /> Tyagi</h1>
                    <h3  className='fw-bold'>And I'm a </h3>
                    <h3 className='mern-stack'> MernStackDeveloper</h3>
                    <p  className='fw-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam</p>
                    
                    <button className='btn btn-info rounded-pill '>Download CV</button> 
                </div>
                <div className='col-md-6'>
                    <img className='img-fluid' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=sph" alt="" />
                </div>
            </div>

            <div className='row py-3'style={{margin:10}}>
                <div className='col-md-6'>
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=sph" alt="" />
                </div>
                <div className='col-md-6'>
                    <h1 className='fw-bold'>About Me</h1>
                    <h2 className='fw-bold'>Mern Stack Developer</h2>
                    <p>A MERN stack developer is a skilled professional specializing in web development using the MERN stack, which comprises MongoDB, Express.js, React.js, and Node.js. This developer is proficient in both frontend and backend technologies, enabling them to create dynamic and interactive web applications. Their responsibilities include designing server-side architecture, implementing databases, building responsive user interfaces, and integrating front-end components with the back-end. MERN stack developers play a crucial role in the end-to-end development process, collaborating with cross-functional teams to deliver feature-rich and efficient web applications.</p>
                </div>
            </div>
        </div>
        <h1 className='text-center fw-bold text-white p-2'>Our Service</h1>
        <div className='row container mx-auto p-4 service' >
            <div className=' card bg-dark col-md-4 text-white' >
                <img className='mt-2 rounded-circle  mx-auto service-img'  src="https://img.freepik.com/free-vector/gradient-programming-company-logo-template_23-2148807613.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                <h2 className='text-center '>Web Development</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia recusandae deserunt obcaecati hic iure voluptatum ipsa dolorem corrupti sed atque quam nesciunt repudiandae error iste eos, amet architecto perferendis?</p>
            </div>
            <div className='card bg-dark col-md-4 text-white'>
                <img  className=' mt-2  mx-auto rounded-circle service-img'  src="https://img.freepik.com/free-vector/gradient-code-logo-template_23-2148844190.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                <h2 className='text-center '>Web Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos consectetur modi tempora molestias sequi eaque assumenda quia optio, reiciendis dolorum et minima sunt molestiae accusantium nostrum? Officia, impedit quibusdam?</p>
            </div>
            <div className='card bg-dark col-md-4 text-white' >
                <img  className=' mt-2 mx-auto rounded-circle  service-img'  src="https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148813996.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                <h2 className='text-center '>UX/UI Design</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta temporibus iste culpa cupiditate odit adipisci pariatur nisi recusandae porro exercitationem provident sed sequi molestiae praesentium cum, sint animi, suscipit delectus!</p>
            </div>
        </div>
        <h1 className='text-white text-center fw-bold'>Our Project</h1>
        <div className='container project-container '>
            <div className='row p-3 '>
                <div className='col-md-5 mx-auto'>
                    <div>
                    <img className='project-img ' src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                    </div>
                    <div className='card p-3 bg-dark text-white project-card'>
                        <h2 className='fw-bold text-center'>BookATable</h2>
                        <h6 className='text-center '>Restaurants Table Booking</h6>
                        <p>Restaurnats Table Booking website developed using of React.js and Javascript for frontend and Node.js and express for Backend .Database is used Mongodb</p>
                        <button className='btn btn-info mx-auto '>View</button>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div>
                    <img className='project-img' src="https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323552.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                    </div>
                    <div className='card p-3 bg-dark text-white  project-card'>
                        <h2 className='fw-bold text-center'>OffBeatCampus</h2>
                        <h6 className='text-center '>Off Campus Interview</h6>
                        <p>Restaurnats Table Booking website developed using of React.js and Javascript for frontend and Node.js and express for Backend .Database is used Mongodb</p>
                        <button className='btn btn-info mx-auto '>View</button>

                    </div>
                    
                </div>
            </div>
        </div>
        <div className='col-md-6 mx-auto py-3'>
            <div className='card bg-dark text-white'>
                <div className='card-body'>
                    <form >
                        <h1 className='text-center fw-bold mb-4'>Contact Me</h1>
                        <div className='row'>
                            <div className='col'>
                                <input type="text" className='form-control text-white bg-dark' placeholder='Enter Your Name' />
                            </div>
                            <div className='col'>
                                <input type="text" className='form-control text-white bg-dark' placeholder='Enter Your Email' />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <input type="text" className='form-control text-white bg-dark' placeholder='Enter Your Mobile Number' />
                            </div>
                            <div className='col'>
                                <input type="text" className='form-control text-white bg-dark' placeholder='Enter Your Email Subject' />
                            </div>
                        </div>

                        <textarea className='w-100 mt-3 form-control bg-dark text-white ' placeholder='Your Message '   cols="30" rows="10"></textarea>
                        <button className='btn btn-info mt-3 rounded-pill'style={{marginLeft:270}}>Send Message</button>
                    </form>
                </div>

            </div>
        </div>
        <footer className='p-3'>
            <div className='card bg-dark p-4 mt-3 text-white'>
                <h6>Copyright 2024</h6>

            </div>
        </footer>

    </div>
  )
}

export default Home