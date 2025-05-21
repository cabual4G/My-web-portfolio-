

Interactives:
1. Smooth Scroll Navigation
What: When I click on a navigation link (nav a), the page smoothly scrolls to the corresponding section.
How: I used the scrollIntoView() method with { behavior: 'smooth' } to animate the scroll.
Trigger: Happens on the click event of each navigation link.
Prevention: Used e.preventDefault() to stop the default jump-to behavior.

2. Scroll-based Fade-in Animation
What: Sections fade in when they come into view while scrolling.
How: I used IntersectionObserver to watch each section, and when one becomes visible (at least 10% in view), I add the visible class to it.
Trigger: This is triggered by scrolling, detected automatically by the IntersectionObserver.
Note: I also stop observing a section after it becomes visible for better performance.
