import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faTeeth } from "@fortawesome/free-solid-svg-icons"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faFax } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"


const ContactInfoContainer = styled.div`
 width: 40%;
 color: #313131;
  box-shadow: 7px 5px 30px rgba(72, 73, 121, 0.15);
  padding: 20px;
  border-radius: 5px;
  margin: 20px;

  div{
      display: flex;
      

      p{
          margin-left: 10px;
      }
  }

`

const getContactInfo = graphql`
  {
    contentfulFooterInfo {
      addressHeadline
      addressLine1
      addressLine2
      contactHeadline
      telefonLine1
      email
      faxLine1
      openningHoursHeadline
      openingHoursLine1
      openingHoursLine2
      openingHoursLine3
      appointmentHeadline
      appointmentLine1
    }
  }
`

function ContactInfo() {
    const data = useStaticQuery(getContactInfo)
    return (
        <ContactInfoContainer>
            <div>
            <h3>Praxis: Dr. med. Alexander</h3>
            </div>

            <div>
            <FontAwesomeIcon icon={faMapMarkerAlt}  />
                <p>{data.contentfulFooterInfo.addressHeadline}</p>
                <p>{data.contentfulFooterInfo.addressLine1}</p>
                <p>{data.contentfulFooterInfo.addressLine2}</p>
            </div>

            <div>
            <FontAwesomeIcon icon={faPhoneAlt}  />
            <p>Telefon:</p>
            <p>{data.contentfulFooterInfo.telefonLine1}</p>     
            </div>

            <div>
            <FontAwesomeIcon icon={faFax}  />
            <p>Fax:</p>
            <p>{data.contentfulFooterInfo.faxLine1}</p>     
            </div>

            <div>
            <FontAwesomeIcon icon={faEnvelope}  />
            <p>Email:</p>
            <p>{data.contentfulFooterInfo.email}</p>     
            </div>

            <div>
            <FontAwesomeIcon icon={faEnvelope}  />
            <p>Web:</p>
            <p>{data.contentfulFooterInfo.email}</p>     
            </div>

            <div>
            <FontAwesomeIcon icon={faClock}  />
            <p>{data.contentfulFooterInfo.openningHoursHeadline}</p>
            </div>

            <div>
            <p>{data.contentfulFooterInfo.openingHoursLine1}</p> 
            </div>

            <div>
            <p>{data.contentfulFooterInfo.openingHoursLine2}</p> 
            </div>
            <div>
            <p>{data.contentfulFooterInfo.openingHoursLine3}</p>     
            </div>

            
      
            <div>
            <FontAwesomeIcon icon={faCalendarAlt}  />
            <p>{data.contentfulFooterInfo.appointmentHeadline}</p>    
            </div>

            <div>
            <p>{data.contentfulFooterInfo.appointmentLine1}</p>  
            </div>

        </ContactInfoContainer>
    )
}

export default ContactInfo
