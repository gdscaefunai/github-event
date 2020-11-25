const attendeesContainer = document.querySelector('.attendees');

const cap = (s) => s.replace(/^./, s[0].toUpperCase());

const attendeeLink = (url, type) =>
  `<a href="${url}" alt="${cap(type)}" title="${cap(
    type
  )}" class="attendee__external-link" 
    target="_blank" rel="noreferrer noopener">
    <img src="/assets/svg-icons/${type}.svg" class="attendee__external-link-image" />
  </a>`;

const appendAttendee = (attendee) => {
  const section = document.createElement('section');
  section.classList.add('attendee');
  section.innerHTML = `<h3 class="attendee__name">${attendee.name}</h3>
  <p class="attendee__dsc">DSC ${attendee.dsc}</p>`;
  ['website', 'linkedin', 'facebook'].forEach((type) => {
    section.innerHTML += attendee[type]
      ? attendeeLink(attendee[type], type)
      : '';
  });
  ['twitter', 'github', 'instagram'].forEach((type) => {
    section.innerHTML += attendee[type]
      ? attendeeLink(`https://${type}.com/${attendee[type]}`, type)
      : '';
  });
  attendeesContainer.appendChild(section);
};

fetch('/attendees.json')
  .then((response) => response.json())
  .then((attendees) => attendees.slice(1)) // remove the first sample
  .then((attendees) => attendees.forEach((attendee) => appendAttendee(attendee)))
  .catch((error) => console.log(error));