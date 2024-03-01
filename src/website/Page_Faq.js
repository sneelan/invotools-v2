import React  from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default ({title, path}) => (
  <>       
<Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className='size-md m-0 p-0 weight-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
            sagittis magna. Sed consequat, neque vitae aliquet faucibus, purus nunc
            dignissim orci, eget placerat orci felis eu ligula. Nam ullamcorper
            condimentum ante, eu finibus est suscipit et. Aliquam auctor mi quis
            metus gravida consequat. Duis malesuada mauris ac ipsum dictum, et congue
            ipsum convallis. Duis sit amet purus arcu. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className='size-md m-0 p-0 weight-medium'>Dolor sit amet, consectetur adipiscing</div>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
            sagittis magna. Sed consequat, neque vitae aliquet faucibus, purus nunc
            dignissim orci, eget placerat orci felis eu ligula. Nam ullamcorper
            condimentum ante, eu finibus est suscipit et. Aliquam auctor mi quis
            metus gravida consequat. Duis malesuada mauris ac ipsum dictum, et congue
            ipsum convallis. Duis sit amet purus arcu. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className='size-md m-0 p-0 weight-medium'>Nam ullamcorper
            condimentum ante, eu finibus est suscipit et</div>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
            sagittis magna. Sed consequat, neque vitae aliquet faucibus, purus nunc
            dignissim orci, eget placerat orci felis eu ligula. Nam ullamcorper
            condimentum ante, eu finibus est suscipit et. Aliquam auctor mi quis
            metus gravida consequat. Duis malesuada mauris ac ipsum dictum, et congue
            ipsum convallis. Duis sit amet purus arcu. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className='size-md m-0 p-0 weight-medium'>Ipsum dolor sit amet, adipiscing</div>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
            sagittis magna. Sed consequat, neque vitae aliquet faucibus, purus nunc
            dignissim orci, eget placerat orci felis eu ligula. Nam ullamcorper
            condimentum ante, eu finibus est suscipit et. Aliquam auctor mi quis
            metus gravida consequat. Duis malesuada mauris ac ipsum dictum, et congue
            ipsum convallis. Duis sit amet purus arcu. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className='size-md m-0 p-0 weight-medium'>Sit amet mauris ac ipsum dictum</div>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
            sagittis magna. Sed consequat, neque vitae aliquet faucibus, purus nunc
            dignissim orci, eget placerat orci felis eu ligula. Nam ullamcorper
            condimentum ante, eu finibus est suscipit et. Aliquam auctor mi quis
            metus gravida consequat. Duis malesuada mauris ac ipsum dictum, et congue
            ipsum convallis. Duis sit amet purus arcu. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </AccordionDetails>
      </Accordion>
  </>
);