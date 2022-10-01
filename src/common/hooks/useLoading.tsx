import { useAppSelector } from "../components/redux/hooks";

function useLoading() {
  const { loading: userloading } = useAppSelector((state) => state.user);
  const { loading: disputeloading } = useAppSelector((state) => state.disputes);
  const { loading: transactionloading } = useAppSelector(
    (state) => state.transactions
  );
  const { loading: dashboardloading } = useAppSelector(
    (state) => state.dashboardSummary
  );
  const { loading: walletloading } = useAppSelector((state) => state.wallet);
  const { loading: completeprofileloading } = useAppSelector(
    (state) => state.completeProfile
  );
  const { loading: messageloading } = useAppSelector((state) => state.messages);

  return {
    userloading,
    disputeloading,
    transactionloading,
    dashboardloading,
    walletloading,
    completeprofileloading,
    messageloading,
  };
}

export default useLoading;
