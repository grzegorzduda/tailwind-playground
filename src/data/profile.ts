const relationshipStatusBase = [
  {
    label: 'Single',
    value: 'sin',
    badge: 'Single',
  },
  {
    label: 'In relationship',
    value: 'rel',
    badge: 'Partnered',
  },
  {
    label: 'Engaged',
    value: 'eng',
    badge: 'Partnered',
  },
  {
    label: 'Married',
    value: 'mar',
    badge: 'Partnered',
  },
  {
    label: 'Divorced',
    value: 'div',
    badge: 'Single',
  },
  {
    label: 'Separated',
    value: 'sep',
    badge: 'Single',
  },
  {
    label: 'Widowed',
    value: 'wid',
    badge: 'Single',
  },
  {
    label: 'Other',
    value: 'oth',
    badge: 'Single',
  },
];

export const relationshipStatus = [
  ...relationshipStatusBase,
  {
    value: 'no_preference',
    label: 'No preference',
    badge: 'No pref.'
  },
];

export const profileInformation = {
  personalInformation: [
    {
      value: 'first_name',
      label: 'First Name',
      type: 'text',
      choices: null,
      default: null,
      required: true,
    },
    {
      value: 'city',
      label: 'City',
      choices: null,
      type: 'text',
      default: null,
      required: true,
    },
    {
      value: 'date_of_birth',
      label: 'Date of Birth',
      choices: null,
      type: 'date',
      default: null,
      required: true,
    },
  ],
  photos: [
    {
      value: 'profile_photos',
      label: null,
      type: 'photos',
      choices: null,
      default: [],
      required: true,
    },
  ],
  video: [
    {
      value: 'video_url',
      label: null,
      type: 'video',
      choices: null,
      default: null,
      required: false,
    },
  ],
};
