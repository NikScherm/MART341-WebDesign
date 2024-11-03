I decided to revisit one of my first attempts at coding in HTML: the Giftshop site. The pages index.html and styles.css were the focus of my work.

##Break Down

The font family I chose is "Times New Roman" because it is good for overall readability. "Serif" is set as a fallback in case the selected font is not available.

After reading online, I decided to use margin: 0; and padding: 0; to allow for better positioning of the main content background.

The vertical menu area is my attempt to transfer code from the HTML side. It is similar to a hover menu, except that you do not need to hover over it for links to appear. The choices made in this section ensure that the spacing and colors match the header while maintaining a consistent size and margin. Other styles deal with links in the vertical menu for basic font-related properties and padding.

.active
This class was added to indicate the current page a user is on.

.main-content
This class addresses the main area of content on the page, providing an overall style for alignment, background color, padding, etc. This helps ensure consistency throughout the website.

The footer is separate from the main content, allowing it to create its own space. The main focus here was on padding and the background color.

>Footer a
This class styles the links in the footer.
