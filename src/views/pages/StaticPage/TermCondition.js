import React, { useContext } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  makeStyles,
  IconButton,
  ListItem,
  List,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { CgPlayButtonO } from "react-icons/cg";
import SettingsContext from "src/context/SettingsContext";
const useStyles = makeStyles((theme) => ({
  Tokenmain: {
    padding: "170px 0px 100px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: "120px 0px 70px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "90px 0px 40px",
    },
    "& h1": {
      lineHeight: "66px",
      marginBottom: "40px",
      fontSize: "70px",
      fontWeight: "600",
      color: theme.palette.primary.main,
      [theme.breakpoints.down("md")]: {
        fontSize: "50px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        marginBottom: "16px",
      },
    },
    "& .textbox": {
      "& h5": {
        color: theme.palette.text.subtext,
        marginBottom: "20px",
        fontWeight: "300",
        fontSize: "16px",
      },
      "& h2": {
        fontWeight: "500",
        color: theme.palette.text.cotext,
        marginBottom: "16px",
        marginTop: "30px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "22px",
        },
      },
      "& h6": {
        fontWeight: "400",
        color: theme.palette.text.cotext,
        marginTop: "20px",
        marginBottom: "20px",
      },
    },
    "& .notesbox": {
      "& h5": {
        color: theme.palette.text.subtext,
        fontWeight: "300",
      },
    },
  },
  textboxs: {
    position: "relative",
    zIndex: "1",
    "& li": {
      position: "relative",
      fontSize: "16px",
      color: theme.palette.text.subtext,
      fontWeight: "300",
      fontFamily: "Roboto, sans-serif",
      lineHeight: "21px",
      "&::after": {
        content: "''",
        position: "absolute",
        height: "6px",
        width: "6px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "50%",
        left: "-16px",
        top: "14px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "100%",
    },
    "& .MuiList-padding": {
      paddingTop: "0px",
      paddingBottom: " 8px",
    },
  },
  textboxs1: {
    position: "relative",
    zIndex: "1",
    "& li": {
      position: "relative",
      fontSize: "16px",
      color: theme.palette.text.subtext,
      fontWeight: "300",
      fontFamily: "Roboto, sans-serif",
      marginBottom: "14px",
      lineHeight: "21px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "100%",
    },
    "& .MuiList-padding": {
      paddingTop: "0px",
      paddingBottom: " 8px",
    },
    "& li::marker": {
      color: theme.palette.primary.main,
    },
  },
  contactaddress: {
    width: "100%",
    maxWidth: "226px",
  },
}));

function TermCondition() {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);

  return (
    <Box className={classes.Tokenmain}>
      <Box
        className={
          themeSeeting?.settings?.theme === "DARK" ? "static" : "static1"
        }
      >
        <div className="shade1"></div>
        <div className="shade2"></div>
        <div className="shade3"></div>
        <div className="shade4"></div>
        <div className="shade5"></div>
        <div className="shade6"></div>
        <div className="shade7"></div>
        <div className="shade8"></div>
        <div className="shade9"></div>
        <div className="shade10"></div>
        <Container>
          <Box>
            <Typography variant="h1">Terms of Use</Typography>
          </Box>
          <Box className="textbox">
            <Typography variant="h5">
              By accessing this website, you acknowledge that you have read,
              understand and accept the terms and conditions of use described
              below. If you do not understand or accept these terms and
              conditions of use which you are required to abide by, you should
              immediately exit this website.
            </Typography>
            <Typography variant="h5">
              EDVERSE (including its affiliates) (“Company”, “We” or “Us” and
              their connotations) operates a website (URL:
              https://www.EDVERSE.com or the POC applications / any kind of
              software builds) (together called as “Platform”) which is engaged
              in the service of online education through the means of a
              metaverse of various subjects to the audience.
            </Typography>
            <Typography variant="h5">
              These terms and conditions (“Terms”) describe the terms on which
              the Company grants end users access to the Platform (hereinafter
              referred to as “Services”) and shall be read with the privacy
              policy available on the website. Anyone below 18 years of age is
              assumed to be a child (“Child”) and requires parental consent to
              use the Platform. The parents of the Child or users above 18 years
              of age are hereinafter referred to as “you”, “your” or “yours”.
              The term “Users” for the purposes of these Terms shall be read as
              You and/or Child. Users also include all persons who access,
              browse, or sign up on the Platform for applying to teach on the
              Platform (“Applicant(s)”) and those selected to teach on the
              Platform (“Instructor(s)”).
            </Typography>
            <Typography variant="h2">
              Copyright Notice and Limited Authorization
            </Typography>
            <Typography variant="h6">
              Everything on this website is copyrighted. All copyrights are
              owned by EDVERSE (EDVERSE) and/or its subsidiaries or a third
              party original creator (“Third Party”) of the material (“Third
              Party Materials”). You are free to view, copy and print the
              EDVERSE Material found on this website as long as:
            </Typography>
          </Box>
          <Container style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <Box mb={4}>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    The EDVERSE Material is used by you for information purposes
                    only and not further distributed except in situations when
                    you intend to use the EDVERSE Materials for non- commercial
                    purposes only.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Unless otherwise authorized by EDVERSE or you have a license
                    or authorization directly granted by the Third Party, you
                    are not authorized to copy and/or print the Third Party
                    Materials that are copyrighted materials provided at this
                    website.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Business partners, customers, suppliers, associates of
                    EDVERSE and other Third Parties that, in cooperation with
                    EDVERSE, publish their own proprietary material on this
                    website retain full legal and copyright ownership of their
                    respective material.
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Container>
          <Box className="textbox">
            <Typography variant="h2">Username and Password</Typography>
            <Typography variant="h5">
              In order to access the Company’s Platform and its services, You
              may have to create an account and disclose information including,
              but not limited to, (i) name, e-mail ID, photograph, location and
              other contact information (ii) gender and other demographics (iii)
              birth date and year to validate your current age or of your Child
              (iv) your email address to acquire the parental consent. You must
              be at least 18 years old to register on the Platform. If you are
              under 18 years old, you are not permitted to register on this site
              unless such registration is completed by a parent or legal
              guardian. You acknowledge that your user ID and password
              (“Participant Account”) is for your exclusive use only. Use or
              sharing of your Participant Account with another user or person is
              not permitted and is cause for immediate blocking of your access
              to the Platform, the Services and the content provided by the
              Company and shall lead to termination of this Agreement without
              any notice.
            </Typography>
            <Typography variant="h5">
              You are solely responsible for maintaining the confidentiality of
              your Participant Account and for all activities that occur under
              it. You agree to immediately notify to the Company if you become
              aware of or have reason to believe that there is any unauthorized
              use of your Participant Account. You also agree to take all
              reasonable steps to stop such unauthorized use and to cooperate
              with the Company in any investigation of such unauthorized uses.
              The Company shall not under any circumstances be held liable for
              any claims related to the use or misuse of your Participant
              Account due to the activities of any third party outside of your
              control or due to tour failure to maintain the confidentiality and
              security of your Participant Account.
            </Typography>
            <Typography variant="h2">
              Use of the Platform by the Child
            </Typography>
            <Typography variant="h6">
              You as a parent/guardian expressly acknowledge and undertake that:
            </Typography>
          </Box>
          <Box mb={4}>
            <Box className={classes.textboxs1}>
              <ol type="1" style={{ paddingLeft: "16px" }}>
                <li>
                  You are competent and have all the necessary legal rights to
                  enter into this agreement on behalf of your child.
                </li>
                <li>
                  You grant your consent to the Company for your child to attend
                  and participate in the classes, courses, tests, sessions
                  and/or any other program conducted and/or organized by the
                  Company on its Platform and in relation to the services
                  provided by the Company.
                </li>
                <li>
                  You undertake that the participation of the Child and all the
                  activities done by the Child will be under your direct and
                  constant supervision. You further accept full and complete
                  liability arising out of the child’s acts, whether direct or
                  indirect.
                </li>
              </ol>
            </Box>
          </Box>
          <Box className="textbox">
            <Typography variant="h2">Modules and Curriculum</Typography>
            <Typography variant="h5">
              The Company will have its sets of modules according to which the
              Child / teacher/ learner/ educator is expected to complete his/her
              learning and teaching levels.
            </Typography>
            <Typography variant="h5">
              The Company shall also grant you access to its material, content,
              curriculum, documents and other information and data
              (“Curriculum”) which may be in video, audio, written, graphic,
              recorded, photographic, or any other format in relation to the
              modules for which you have registered for. The Company reserves
              the right to amend, revise or update the Curriculum at any time.
            </Typography>
            <Typography variant="h2">License to Use</Typography>
            <Typography variant="h5">
              The Company will have its sets of modules according to which the
              Child / teacher/ learner/ educator is expected to complete his/her
              learning and teaching levels.
            </Typography>
            <Typography variant="h5">
              The Company hereby grants You, the limited, non-transferable,
              non-exclusive, and revocable license to access, view and use the
              Platform only for the purposes of accessing, viewing, posting or
              submitting user material, using the embedded link function,
              placing store orders or for accessing information, applications
              and services. The Company reserves the right to suspend or deny,
              in its sole discretion, your access to all or any portion of the
              Platform. This license is limited to personal and non-commercial
              uses by You. Any rights not expressly granted to You herein are
              reserved to Company.
            </Typography>
            <Typography variant="h5">
              You are not permitted to reproduce, transmit, distribute,
              sub-license, broadcast, disseminate, or prepare derivative works
              of the Curriculum, or any part thereof, in any manner or through
              any communication channels or means, for any purpose other than
              the limited purpose mentioned above, without the Company’s prior
              written consent.
            </Typography>
            <Typography variant="h2">Privacy Statement</Typography>
            <Typography variant="h5">
              EDVERSE Privacy Policy accessed through this website, is an
              integral part of these Terms & Conditions that you are deemed to
              have acknowledged that you have read, understood and accepted by
              accessing the EDVERSE website.
            </Typography>
            <Typography variant="h2">
              Third Party Copyrights and the Copy Right Agent
            </Typography>
            <Typography variant="h5">
              EDVERSE is committed to respecting the intellectual property
              ownership rights of others, and we require that the users of and
              visitors to our websites do the same. EDVERSE may, in its sole
              discretion, terminate the accounts or access rights of users or
              visitors who violate the intellectual property ownership rights of
              EDVERSE and others.
            </Typography>
            <Typography variant="h6">
              If you have good reasons to believe that materials in which you
              have intellectual property ownership rights have been copied in a
              way that constitutes a copyright infringement on our websites,
              please provide the following information to the EDVERSE Copyright
              Team:
            </Typography>
            <Container style={{ paddingLeft: "15px", paddingRight: "15px" }}>
              <Box mb={4}>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      An electronic or hard copy signature of the person
                      authorized to act on behalf of the copyright owner;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      A description of the copyrighted work that you have good
                      reason to believe has been infringed;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      A description as to where the copyrighted materials you
                      believe is infringing is located on our website;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      Your address, telephone number, and email address so that
                      we may contact you;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      A certified statement by you that has a good faith belief
                      that the disputed use is not authorized by the copyright
                      owner, its agent, or the law;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      A statement by you, made under penalty of perjury, that
                      the information in your notice to us is accurate and that
                      you are the copyright owner or authorized to act on behalf
                      of the copyright owner.
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      EDVERSE Copyright Team for notice of Claims of copyright
                      infringement on our website or for requests for additional
                      use of materials can be reached at hello@EDVERSE.com
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Container>
            <Typography variant="h2">Trademarks</Typography>
            <Typography variant="h5">
              EDVERSE and the EDVERSE logos are trademarks of EDVERSE. All other
              trademarks are the property of their respective owners.
            </Typography>
            <Typography variant="h2">Warranty Disclaimer</Typography>
            <Typography variant="h5">
              While EDVERSE attempts to provide accurate information on this
              website, it assumes no responsibility for inaccuracy. EDVERSE may
              change the information and/or materials available at this website,
              or the products and services mentioned, at any time and without
              prior notice. Information may include technical inaccuracies or
              typographical errors.
            </Typography>
            <Typography variant="h5">
              EDVERSE does not warrant that the electronic functions contained
              in or on this website will be uninterrupted or error free, that
              defects will be corrected, of that this website, or the server
              that makes it available, are free of viruses or bugs or represents
              full functionality, accuracy or reliability of the information
              available through this website.
            </Typography>
            <Typography variant="h5">
              Information and/or materials on this website are provided “AS IS”
              and does not constitute a warranty of any kind, either expressed
              or implied. EDVERSE disclaims all warranties, expressed or
              implied, which includes, but is not limited to, implied warranties
              of merchantability, fitness for a particular purpose, and/or
              non-infringement. Except where prohibited by law, this disclaimer
              also includes any expressed or implied warranties arising from any
              course of dealing, usage, or trade practice.
            </Typography>
            <Typography variant="h5">
              You are responsible for implementing sufficient procedures and
              checkpoints to satisfy your particular requirements for accuracy
              of data input and output, and for maintaining means for the
              reconstruction of lost data.
            </Typography>
            <Typography variant="h2">Limitation of Liability</Typography>
            <Typography variant="h5">
              Neither EDVERSE nor any of its affiliates, subsidiaries, parent or
              sister companies, or their respective directors, employees or
              other representatives, will be liable for any direct, indirect,
              special, incidental, punitive and/or consequential damages arising
              out of the use, or the inability to use, the information and/or
              materials on this website. This limitation of liability includes,
              but is not limited to, loss of data, loss of revenues, loss of
              savings, loss of business, loss of reputation, loss of profits
              and/or any economic loss in connection with the furnishing,
              performance, or use or inability to use this website or reliance
              on the information and/or materials contained in this website;
              even if EDVERSE is advised of the possibility of such damages.
            </Typography>
            <Typography variant="h2">Termination of Use</Typography>
            <Typography variant="h5">
              EDVERSE may, at its option, terminate, without notice and with or
              without cause, any person or entity’s access to the website,
              especially upon any breach of this Terms & Conditions, and without
              prejudice to EDVERSE right to make a claim of compensation for
              damages.
            </Typography>
            <Typography variant="h2">Links</Typography>
            <Typography variant="h5">
              Although this website may contain links to third party sites,
              EDVERSE is not responsible for the content of any such third party
              linked sites. EDVERSE provides these thirdparty links as a
              convenience and does not endorse the companies or contents of any
              such linked sites.
            </Typography>
            <Typography variant="h5">
              Links to EDVERSE platform for any purpose not expressed in these
              terms may be reproduced only with prior permission from EDVERSE.
            </Typography>
            <Typography variant="h2">
              Posting and Submitting of Information
            </Typography>
            <Typography variant="h5">
              You are prohibited from posting or transmitting any unlawful,
              threatening, obscene, libelous, or otherwise offensive materials
              on or through this website.
            </Typography>
            <Typography variant="h5">
              Any material, information or idea submitted or posted on this
              website by you will be considered non-confidential and
              non-proprietary. EDVERSE may share or otherwise use your
              submission for any purpose whatsoever without your consent. If any
              of the materials or information submitted constitutes personal
              data, you agree that EDVERSE may transmit such personal data
              across international boundaries for any EDVERSE business purpose.
              Personal data will be treated as set forth in the Privacy Policy,
              as provided on this website.
            </Typography>
            <Typography variant="h2">
              Jurisdiction and Choice of Laws
            </Typography>
            <Typography variant="h5">
              These Terms & Conditions and all claims or issues regarding this
              website shall be governed according to the laws of India, to the
              exclusion of its conflict of law provisions.
            </Typography>
            <Typography variant="h2">
              Modification of Terms & Conditions
            </Typography>
            <Typography variant="h5">
              These Terms & Conditions were last updated on 4th July 2022
            </Typography>
            <Typography variant="h5">
              EDVERSE reserves the right to change these Terms & Conditions at
              any time without prior written notification. Notwithstanding the
              aforementioned, any new Terms & Conditions will only apply to
              users upon acceptance thereof on their initial login and for
              previous users, upon such user’s first subsequent login after such
              modifications.
            </Typography>
            <Typography variant="h2">Contact</Typography>
            <Typography variant="h5">Name: HEXAVERSE</Typography>
            <Typography variant="h5">Email: HELLO@HEXAVERSE.com</Typography>
            <Box className={classes.contactaddress}>
              <Typography variant="h5">
                Address: These Terms & Conditions were last updated on 4th July
                2022
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default TermCondition;
