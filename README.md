# CitizenHacks2019

## Instachain
### https://thirsty-roentgen-965c99.netlify.com/

### Problem: 
Companies have control over users’ personal data. They can exploit this and sell it for monetary gain.

### Solution: 
We are trying to prevent this by decentralizing users’ personal data using blockchain.

### Purpose: 
Social media website where users can write text posts and look up other users’ profiles to see their posts.

### Description: 
Instachain uses blockstack, which is a decentralized computing platform. Blockstack encrypts data. This removes the potential for breaches of privacy from outside parties and the company itself.

Instachain follows the principles of privacy by design:
https://www.ipc.on.ca/wp-content/uploads/Resources/pbd-privacy-and-security-by-design-oracle.pdf
1. Proactive not Reactive; Preventative not Remedial: took actions to prevent ownership of data at a centralized organization 
2. Privacy as the Default Setting: Users’ personal information is encrypted by blockstack by default
3. Privacy measures are not tacked on at the end, but instead embedded into our code and design
4. Full Functionality — Positive-Sum, not Zero-Sum: Did not sacrifice functionality for privacy. For our website privacy is an advantage, not a burden
5. End-to-End Security — Full Lifecycle Protection: secured people’s data through blockstack and give people freedom to their own data
6. Visibility and Transparency — Keep it Open: we don’t have ownership of the data and we won’t be able to use your data in any way such as advertising
7. Respect for User Privacy — Keep it User-Centric: Users of InstaChain and their privacy are our top priority

### Challenges: 
- Had trouble displaying logo
  - Trial and error
  - Played around with the numbers (ex. background-size, width, height)
- Issues viewing other people’s profiles on InstaChain
- Input field would not pass properly, it always returned a null
  - Looking for solutions online
- Components of web page would be out of place
  - Look for solutions in existing code and tried different approaches until the webpage looked the way we wanted
- Didn't know a good way to implement image posting
  - This would be a next step (mainly css framework struggles as we have very little experience)

### Sources:
1. Tutorial: BUILD A REALTIME INSTAGRAM CLONE by Christian Nwamba from https://pusher.com/tutorials/instagram-clone-part-1
2. Tutorial: Blockstack Storage Tutorial by Blockstack from https://docs.blockstack.org/browser/blockstack_storage.html
