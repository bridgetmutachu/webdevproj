import img1 from "../assets/Laundry and dry cleaning-rafiki.png";
import img2 from "../assets/cleaning service-rafiki.png";
import img3 from "../assets/Electrician-pana.png";
import img4 from "../assets/Gardening-cuate.png";
import img5 from "../assets/hairdresser team-rafiki.png";
import img6 from "../assets/Barber-pana.png";
import img7 from "../assets/Pipeline maintenance-rafiki.png";
import img8 from "../assets/Chef-pana.png";

const Services = () =>{
    
    const services = [
        { image: img1, title: "Laundry" },
        { image: img2, title: "Home and Office cleaning" },
        { image: img3, title: "Electrical" },
        { image: img4, title: "Gardening" },
        { image: img5, title: "Hair Styling" },
        { image: img6, title: "Barber" },
        { image: img7, title: "Plumbing" },
        { image: img8, title: "Cooking" },
    ];
    return(
        <div id="services" className="card">
            <h3 className="services-heading">Our Services</h3>
            
            <div className="services-grid">
                {services.map((item, index) => (
                    <div className="service-card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div> 
        </div>
    );
}
export default Services;