import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as CSS from 'csstype';
import * as React from 'react';
import { WelcomeEmailProps as ServerLicenseEmailProps } from 'src/interfaces/notification.interface';

/**
 * Template to be used for FUTOPay project
 * Variable is {{LICENSEKEY}}
 * */
export const LicenseEmail = ({}: ServerLicenseEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Immich Server License</Preview>
    <Body
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#f4f4f4',
        color: 'rgb(28,28,28)',
        fontFamily: 'Overpass, sans-serif',
        fontSize: '18px',
        lineHeight: '24px',
      }}
    >
      <Container
        style={{
          width: '540px',
          maxWidth: '100%',
          padding: '10px',
          margin: '0 auto',
        }}
      >
        <Section
          style={{
            padding: '36px',
            tableLayout: 'fixed',
            backgroundColor: '#fefefe',
            borderRadius: '16px',
            textAlign: 'center' as const,
          }}
        >
          <Img
            src="https://immich.app/img/immich-logo-inline-light.png"
            alt="Immich"
            style={{
              height: 'auto',
              margin: '0 auto 48px auto',
              width: '50%',
              alignSelf: 'center',
              color: 'white',
            }}
          />

          <Text style={text}>Thank you for supporting Immich and open-source software</Text>

          <Text style={text}>
            Your <strong>Immich Server</strong> license key is
          </Text>

          <Section
            style={{
              textAlign: 'center',
              background: 'rgb(225, 225, 225)',
              borderRadius: '16px',
              marginBottom: '25px',
            }}
          >
            <Text style={{ fontFamily: 'monospace', fontWeight: 600, color: 'rgb(66, 80, 175)' }}>LICENSEKEY</Text>
          </Section>

          <Text style={text}>
            To activate your instance, you can click the following button or copy and paste the link below to your
            browser
          </Text>

          <Row>
            <Column align="center">
              <Button style={button} href={`https://my.immich.app/link?target=activate_license&licenseKey=`}>
                Activate
              </Button>
            </Column>
          </Row>

          <Row>
            <Column align="center">
              <Link
                style={{ marginTop: '50px', color: 'rgb(66, 80, 175)', fontSize: '0.9rem' }}
                href={`https://my.immich.app/link?target=activate_license&licenseKey=`}
              >
                https://my.immich.app/link?target=activate_license&licenseKey=
              </Link>
            </Column>
          </Row>

          <Link href="https://futo.org">
            <Img
              src="https://futo.org/images/FutoMainLogo.svg"
              alt="FUTO"
              style={{
                height: '20px',
                marginTop: '50px',
              }}
            />
          </Link>
        </Section>

        <Hr style={{ color: 'rgb(66, 80, 175)', marginTop: '24px' }} />

        <Section style={{ textAlign: 'center' }}>
          <Row>
            <Column align="center">
              <Link href="https://play.google.com/store/apps/details?id=app.alextran.immich">
                <Img src={`https://immich.app/img/google-play-badge.png`} height="96px" alt="Immich" />
              </Link>
              <Link href="https://apps.apple.com/sg/app/immich/id1613945652">
                <Img
                  src={`https://immich.app/img/ios-app-store-badge.png`}
                  alt="Immich"
                  style={{ height: '72px', padding: '14px' }}
                />
              </Link>
            </Column>
          </Row>
        </Section>

        <Text
          style={{
            color: '#6a737d',
            fontSize: '0.8rem',
            textAlign: 'center' as const,
            marginTop: '14px',
          }}
        >
          <Link href="https://immich.app">Immich</Link> project is available under GNU AGPL v3 license.
        </Text>
      </Container>
    </Body>
  </Html>
);

LicenseEmail.PreviewProps = {} as ServerLicenseEmailProps;

export default LicenseEmail;

const text = {
  margin: '0 0 24px 0',
  textAlign: 'left' as const,
  fontSize: '16px',
  lineHeight: '24px',
};

const button: CSS.Properties = {
  backgroundColor: 'rgb(66, 80, 175)',
  margin: '1em 0',
  padding: '0.75em 3em',
  color: '#fff',
  fontSize: '1em',
  fontWeight: 600,
  lineHeight: 1.5,
  textTransform: 'uppercase',
  borderRadius: '9999px',
};
