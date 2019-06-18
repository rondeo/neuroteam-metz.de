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
  background-color: #3f5588;
  color: #ffffff;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1.5rem;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 2rem;

  h4 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin: 2rem;
  margin-top: 0px;
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
      <Flex>
        <div>
          <Icon icon={faMapMarkedAlt} />
        </div>
        <h4>{data.contentfulFooterInfo.addressHeadline}</h4>
        <p>{data.contentfulFooterInfo.addressLine1}</p>
        <p>{data.contentfulFooterInfo.addressLine2}</p>
        <p>{data.contentfulFooterInfo.addressLine3}</p>
      </Flex>

      <Flex>
        <div>
          <Icon icon={faPhoneAlt} />
        </div>
        <h4>{data.contentfulFooterInfo.telefonHeadline}</h4>
        <p>{data.contentfulFooterInfo.telefonLine1}</p>
      </Flex>

      <Flex>
        <div>
          <Icon icon={faFax} />
        </div>
        <h4>{data.contentfulFooterInfo.faxHeadline}</h4>
        <p>{data.contentfulFooterInfo.faxLine1}</p>
      </Flex>

      <Flex>
        <div>
          <Icon icon={faEnvelope} />
        </div>
        <h4>{data.contentfulFooterInfo.mailHeadline}</h4>
        <p>{data.contentfulFooterInfo.mailLine1}</p>
      </Flex>

      <Flex>
        <div>
          <Icon icon={faClock} />
        </div>
        <h4>{data.contentfulFooterInfo.openningHoursHeadline}</h4>
        <p>{data.contentfulFooterInfo.openingHoursLine1}</p>
        <p>{data.contentfulFooterInfo.openingHoursLine2}</p>
        <p>{data.contentfulFooterInfo.openingHoursLine3}</p>
      </Flex>

      <Flex>
        <div>
          <Icon icon={faCalendarAlt} />
        </div>
        <h4>{data.contentfulFooterInfo.appointmentHeadline}</h4>
        <p>{data.contentfulFooterInfo.appointmentLine1}</p>
      </Flex>
    </Container>
  )
}

export default FooterInfo
