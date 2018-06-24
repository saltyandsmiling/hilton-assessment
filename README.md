Thank you for your time and your interest. Below you'll find some instructions for getting things
 working. 
 
 Acknowledgments:
 
 Accessibility is admittedly not my strong point especially in SPA's. This can be learned though 
 and I'll happily dive in. 
 
Assessment 1:
 
 This can be loaded straight into the browser from your IDE. It was not asked so I did not make 
 this cross browser compatible out of time constraints, please view it in Chrome. I made some choices as far
  as font to get the final product as close to pixel perfect as possible. For the logo I used a free online editor. It worked to adjust the background color and sizing but it's not 
 perfect and a bit pixelated. I've assumed that I'd have access to a wider range of assets in 
 terms of photos and fonts so I did not spend an extensive amount of time to make them perfect. 
 There is no JS file since there were no instructions in terms of functionality. Things like 
 names and information were hard coded in and so this would not be great for reuse and not 
 practical for production use. In terms of accessibility I 
  made what I believe are logical uses of h tags and made sure to put an alt attribute on the 
  hotel exterior photo.

Assessment 2:

To get this going run "npm install" and "npm start" and project will run on localhost:8080, please 
view in Chrome. Testing 
added with "npm test" inside the assessment-2 directory. Testing has 
been added but is not comprehensive by any means. Most of the business logic within the reducers 
has been tested.
 As requested I built this with React, styled-components 
and chose Redux as my state management system. For ease of viewing and evaluation I used an easy to 
navigate folder structure and mostly kept the components together. Depending on reuse 
needs I would consider pulling things out like the checkbox for reuse elsewhere. You'll notice that the <select> menus 
are still in their default styles. I chose to not rework these as they take a considerable amount
 of time and effort and are difficult to make accessible to users using their keyboards. 
 I've assumed that Hilton would have internal libraries with styling and accessibility for these. On that note, the checkbox is also not accessible via a keyboard. Accessibilty in 
  terms of appropriate tags for this section was a bit hard without the context of a wider 
  application.
