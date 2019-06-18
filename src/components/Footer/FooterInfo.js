import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faFax } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
`

const getFooterInfo = graphql`
  {
    contentfulFooterInfo {
      addressHeadline
      addressLine1
      addressLine2
      addressLine3
      telefonHeadline
      telefonLine1
      faxHeadline
      faxLine1
      mailHeadline
      mailLine1
      openningHoursHeadline
      openingHoursLine1
      openingHoursLine2
      openingHoursLine3
      appointmentHeadline
      appointmentLine1
    }
  }
`

function FooterInfo() {
  const data = useStaticQuery(getFooterInfo)
  return (
    <Container>
      <div>
        <div>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </div>
        <h4>{data.contentfulFooterInfo.addressHeadline}</h4>
        <p>{data.contentfulFooterInfo.addressLine1}</p>
        <p>{data.contentfulFooterInfo.addressLine2}</p>
        <p>{data.contentfulFooterInfo.addressLine3}</p>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        <h4>{data.contentfulFooterInfo.telefonHeadline}</h4>
        <p>{data.contentfulFooterInfo.telefonLine1}</p>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faFax} />
        </div>
        <h4>{data.contentfulFooterInfo.faxHeadline}</h4>
        <p>{data.contentfulFooterInfo.faxLine1}</p>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <h4>{data.contentfulFooterInfo.mailHeadline}</h4>
        <p>{data.contentfulFooterInfo.mailLine1}</p>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faClock} />
        </div>
        <h4>{data.contentfulFooterInfo.openningHoursHeadline}</h4>
        <p>{data.contentfulFooterInfo.openingHoursLine1}</p>
        <p>{data.contentfulFooterInfo.openingHoursLine2}</p>
        <p>{data.contentfulFooterInfo.openingHoursLine3}</p>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </div>
        <h4>{data.contentfulFooterInfo.appointmentHeadline}</h4>
        <p>{data.contentfulFooterInfo.appointmentLine1}</p>
      </div>
    </Container>
  )
}

export default FooterInfo
