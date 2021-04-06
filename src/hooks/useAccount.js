import { useState, useEffect } from 'react';

export function useAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const lsFirstName = localStorage.getItem('firstName');
    const lsLastName = localStorage.getItem('lastName');
    if (!lsFirstName) {
      // Get from API
      fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((res) => {
          // another One of these deconstructs - DJ KHALED
          const { first, last } = res.results[0].name;
          setFirstName(first);
          setLastName(last);
          localStorage.setItem('firstName', first);
          localStorage.setItem('lastName', last);
        });
    } else {
      setFirstName(lsFirstName);
      setLastName(lsLastName);
    }
  }, []);

  return { firstName, lastName };
}
