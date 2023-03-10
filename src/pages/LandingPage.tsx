import { useSetRecoilState } from 'recoil';

import { modalState } from '../App';
import './LandingPage.css';
import LargeButton from '../components/ui/LargeButton';
import InformationCard from '../components/landing_page/InformationCard';
import { LOGIN, SIGNUP } from '../utility/constants';

const information = [
  {
    header: 'Manage your Schedule',
    information: 'Staff can easily setup scheduling for you',
  },
  {
    header: 'File a claim',
    information: 'Easily file a claim',
  },
  {
    header: 'Nutrition',
    information:
      'Use our nutrition calculator to see how your diet is improving your health',
  },
];

export default function LandingPage() {
  const setModal = useSetRecoilState(modalState);

  return (
    <main className='flex flex-col gap-10 items-center'>
      <header
        id='landing-header'
        className='text-lg flex flex-col items-center pt-8'
      >
        <div
          id='header-copy'
          className='bg-slate-50 opacity-90 w-fit p-4 rounded-lg text-2xl gap-6 flex flex-col text-blue-800'
        >
          <h2 className='text-6xl'>Welcome to Composite Care</h2>
          <div>Composite Cares about every aspect of your health</div>
          <div>From scheduling to filing claims</div>
          <div>We make it easy</div>
        </div>
      </header>

      <section className='flex flex-col md:flex-row md:gap-1 items-center text-lg px-3'>
        Already a member?
        <LargeButton onClick={() => setModal(LOGIN)}>Log in</LargeButton>
        or
        <LargeButton onClick={() => setModal(SIGNUP)}>
          Create an account
        </LargeButton>
      </section>

      <section className='flex flex-col md:flex-row justify-around gap-4 px-3'>
        {information.map((info) => {
          return (
            <InformationCard
              key={info.header}
              header={info.header}
              information={info.information}
            />
          );
        })}
      </section>
    </main>
  );
}
