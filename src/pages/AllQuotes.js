import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Lee', text: 'Learning React is fun!' },
  { id: 'q2', author: 'LeeSY', text: 'Learning React is great!' },
];

const AllQuote = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuote;
