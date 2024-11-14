// Help.js
import React from 'react';
import { Typography, Box, AppBar, Toolbar, Link } from '@mui/material';
import { MdHelpOutline } from 'react-icons/md';

function Help() {
  return (
    <>
      {/* Banner at the top of the page */}
      <AppBar position="static" sx={{ backgroundColor: '#4caf50' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Help Center
          </Typography>
          <Link href="/" color="inherit" sx={{ marginRight: 2 }}>
            Home
          </Link>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>

        {/* FAQs */}
        {[
          {
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Sign Up' button on the login page and fill in the required information."
          },
          {
            question: "How do I reset my password?",
            answer: "If you've forgotten your password, click on 'Forgot Password?' on the login page to reset it."
          },
          {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support via the 'Contact Us' page or by emailing support@indiansupermarket.com."
          }
        ].map((faq, index) => (
          <div key={index}>
            <Typography variant="h6" gutterBottom>
              {index + 1}. {faq.question}
            </Typography>
            <Typography variant="body1" paragraph>
              {faq.answer}
            </Typography>
          </div>
        ))}
      </Box>
    </>
  );
}

export default Help;