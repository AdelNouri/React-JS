import Contact from "./Contact";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext.js";
import { Link } from "react-router-dom";
import Spinner from "../SpinnerGIF"
import { PINK, CURRENTLINE, ORANGE} from "../../helpers/colors";

const Contacts = () => {
  const { contacts, loading, deleteContact } = useContext(ContactContext);

  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 float-end">
                <Link to={'/contacts/add'}className="btn m-2" style={{ backgroundColor: PINK }}>
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle mx-2" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {
        loading ? <Spinner/> : (
          <section className="container">
            <div className="row">
              {
                contacts.length > 0 ? contacts.map( (c) => <Contact key={c.id} contact={c} deleteContact={() => {
                  deleteContact(c.id, c.fullname)
                }}/>)
                    :
                (
                    <div className="text-center py-5" style={{backgroundColor: CURRENTLINE}}>
                        <p className="h3" style={{color: ORANGE}}>
                            مخاطب یافت نشد ...
                        </p>
                        <img src={require('../../assets/no-found.gif')} alt="یافت نشد" className="w-25"/>
                    </div>
                )
              }
            </div>
          </section>
        )
      }
    </>
  );
};

export default Contacts;