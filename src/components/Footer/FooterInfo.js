import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faFax } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  display: flex;
  background-color: #3f5588;
  color: #ffffff;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1.5rem;

  h4 {
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: normal;
    text-align: left;
    margin-bottom: 10px;
  }
  p{
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: normal;
  }
`

const Flex = styled.div`
  display: flex;
  margin: 0 2rem;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    margin-left: 1.5rem;
    margin-top: -21px;
     
  }
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin-left: 1rem;
  }

  .icon {
   margin-left: -20px;
   margin-right: 10px;
  }
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  
`

const getFooterInfo = graphql`
  {
    contentfulFooterInfo {
      addressHeadline
      addressLine1
      addressLine2
      addressLine3
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

function FooterInfo() {
  const data = useStaticQuery(getFooterInfo)
  return (
    <Container>
      <FlexRow>
       <div>
        <h4>{data.contentfulFooterInfo.addressHeadline}</h4>
          <FlexRow>
        <Icon icon={faMapMarkerAlt }  className="icon"  />
          
          <p>{data.contentfulFooterInfo.addressLine1}</p>
          </FlexRow>
          <p>{data.contentfulFooterInfo.addressLine2}</p>
          <p>{data.contentfulFooterInfo.addressLine3}</p>
        </div>
      </FlexRow>

      <div>
        <Flex>
          <FlexRow>
            <h4>{data.contentfulFooterInfo.contactHeadline}</h4>
            <Icon icon={faPhoneAlt} />
            <p>{data.contentfulFooterInfo.telefonLine1}</p>
          </FlexRow>
        </Flex>

        <Flex>
          <FlexRow>
            <Icon icon={faFax} />
            <p>{data.contentfulFooterInfo.faxLine1}</p>
          </FlexRow>
        </Flex>

        <Flex>
          <FlexRow>
            <Icon icon={faEnvelope} />
            <p>{data.contentfulFooterInfo.email}</p>
          </FlexRow>
        </Flex>
      </div>

      <FlexRow>   
        <div>
        <h4>{data.contentfulFooterInfo.openningHoursHeadline}</h4>
          <FlexRow>
        <Icon icon={faClock} className="icon" />
          <p>{data.contentfulFooterInfo.openingHoursLine1}</p>
          </FlexRow>
          <p>{data.contentfulFooterInfo.openingHoursLine2}</p>
          <p>{data.contentfulFooterInfo.openingHoursLine3}</p>
        </div>
      </FlexRow>

      <FlexRow>
        <div>
          <h4>{data.contentfulFooterInfo.appointmentHeadline}</h4>
          <FlexRow>
          <Icon icon={faCalendarAlt} className="icon" />
          <p>{data.contentfulFooterInfo.appointmentLine1}</p>
          </FlexRow>
        </div>
      </FlexRow>
    </Container>
  )
}

export default FooterInfo
