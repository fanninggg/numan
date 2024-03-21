# Growth Engineer Technical Task

**Design choices & rationale**
- Designed mobile first (estimates vary but ~60% of web traffic is on mobile devices)
- Rather than the core/hero text of each option focusing on the time frame of the payment (Prepay 6 months) it instead focuses on the benefit to the user (£6.50 per month). 
- Banner over the 12 month card which says “best value”. Alternatively I could have added a little “popular” pill to that card or maybe the 6 month one and then keep the banner on the 12 month.
- I could also have used a different colour button & matching banner on the final card.
- I have used “you language”, the idea being to connect with the user more than when using passive language.
- I have preselected the 12 month card, thereby setting it as the ‘default’ option in the user's mind. This has the nice added benefit of someone breezing through the process selecting the best value and our preferred choice without having to click anything extra.
- I have put a total price per year on the card, to allow for easy comparison by the user. I could also have used the total saving per year which would better emphasise the benefit to the user, but make comparison harder so I erred on the side of ease of comparison.
- Less desirable choices are hidden below the fold on mobile devices. But enough is visible to make it clear that other options exist if they scroll.
Set the button text to “Begin regrowing”, I don’t love the wording but it does emphasise the benefit to the user more than something like “Next” would.
- I made some more desktop friendly versions of the cards which you can see in the Figma below.

**Other options considered**
- Preselection could also allow for some more unique layout options, maybe something akin to a carousel where the selected option is larger than the others and slides away if another option is selected. However this might make comparison between the plans more difficult if the details aren’t all available at a glance, it’s also a less familiar layout for the user and more difficult to make work on a mobile device.
- Defaulting to 12 months could allow for some “negative UI copywriting”, so rather than 10% cheaper to pay monthly, it could say “15% more expensive”. But that would likely be a step too far and rather than highlighting the value of the 12 months it could potentially turn off a customer who only wanted a month. 

**Release & Monitoring**
- The most obvious metric to track with regards to measuring success would be the choice of the customers, ie. the percentage of customers who selected each of the various options in A vs. B at the point they complete the process.
- An event should fire whenever a customer selects a different subscription length, to determine if they are changing their mind repeatedly. 
- I’d also be interested in tracking how long users stayed on this page, there’s not a huge amount of reading to be done so it would be good to know how long they took to consider.

[Figma Link](https://www.figma.com/file/bT0VThqndTNOqxGs1KaQ7f/Numan-Tech-Test?type=design&node-id=0%3A1&mode=design&t=TvxRsLNkGtkm2mHs-1)
<img width="1140" alt="Screenshot 2024-03-21 at 08 59 06" src="https://github.com/fanninggg/numan/assets/33252472/445e0846-433b-42cd-99a2-3b11eed7c658">
