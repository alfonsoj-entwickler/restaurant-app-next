import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import ModalProduct from "@/components/ModalProduct";
import Step from "@/components/Step";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import useRestaurant from "@/hooks/useRestaurant";

import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');


export default function Layout({ children, page }) {
  const { modal, product } = useRestaurant();
  return (
    <>
      <Head>
        <title>Coffe - {page}</title>
        <meta name="description" content="Restaurant and Coffee" />
      </Head>
      <div className="md:flex gap-5">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 ">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="mt-10 pt-10">
            <Step />
            {children}
          </div>
        </main>
      </div>
      {modal && (
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalProduct />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
}
