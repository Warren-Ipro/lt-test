import React from 'react';
import Layout from '../components/layout';
import CompliantLinkSidebar from '../components/compliantLinkSidebar';

function DmcaNotice() {
  return (
    <Layout>
      <section>
        <div className="container mx-auto px-4 my-8 md:my-16 grid grid-cols-12 md:gap-x-12 compliance-page">
          <div className="hidden md:block col-span-12 md:col-start-1 md:col-span-2 text-sm">
            <CompliantLinkSidebar />
          </div>
          <div className="col-span-12 md:col-start-3 md:col-span-8 leading-loose text-lt-dark-700 divide-y divide-lt-dark-100 compliance-body">
            <h1 className="font-bold text-4xl mb-4 pb-4 text-lt-dark-900">DMCA Notice</h1>
            <div className="py-8">
              <p>NO PART OF THIS WEBSITE MAY BE REPRODUCED OR TRANSMITTED IN ANY FORM OR BY ANY MEANS, MECHANICAL, ELECTRONIC, OR OTHERWISE, INCLUDING PHOTOCOPYING AND RECORDING, OR BY ANY INFORMATION STORAGE AND RETRIEVAL SYSTEM, OR TRANSMITTED BY E-MAIL, OR USED IN ANY OTHER FASHION WITHOUT THE EXPRESS PRIOR WRITTEN PERMISSION OF THE WEBSITE OWNER.</p>
              <p>This website, including all text, HTML, scripts, and images are copyrighted, owned, and/or licensed by iPro Academy, LLC. All rights are reserved worldwide. This copyright notice applies to everyone who accesses this website, it’s products and/or services, and includes all visitors to this website.</p>
              <p>This notice excludes the downloading and temporary caching of this website on a personal computer for the following explicit purposes:</p>
              <ul className="list-disc pl-4 mb-4">
                <li>Viewing this website</li>
                <li>Accessing and downloading any information clearly marked as reproducible</li>
              </ul>
              <p>This notice is for informational purposes only and should it be construed as, nor is it intended to be legal advice. If you believe that your intellectual property rights have been violated or infringed upon, or if a notice of infringement has been filed against you, seek legal counsel immediately for a professional legal opinion.</p>
            </div>
            <div className="py-8">
              <h2 className="font-bold text-lg mb-2">DMCA Provisions</h2>
              <p>The Digital Millennium Copyright Act of 1998, found at 17 U.S.C. Â§ 512 (“DMCA”), provides recourse for owners of copyrighted materials who believe that their rights under United States copyright law have been infringed upon on the Internet.</p>
              <p>Under the DMCA, the bona fide owner of copyrighted materials who has a good faith belief that their copyright has been infringed may contact not only the person or entity infringing on their copyright, but may also contact the designated agent of an Internet Service Provider (“ISP”) to report the alleged infringements of protected works, when such alleged infringements appear on pages contained within the system of the Internet Service Provider.</p>
              <p>Upon receipt of a properly filed complaint under the DMCA, the owner and/or the ISP of this website will block access to the allegedly infringing material. The website owner and/or the ISP will forward a copy of the notification of claimed copyright infringement to the alleged infringer.</p>
              <p>Anyone who believes in good faith that a notice of copyright infringement has wrongfully been filed against them, may submit a Counter notice to the website owner and/or the ISP.</p>
              <p>The owner of this website and the ISP are committed to complying with international trade law, international trade practices, and all United States laws, including United States copyright law.</p>
            </div>
            <div className="py-8">
              <h2 className="font-bold text-lg mb-2">Notification Of Claimed Copyright Infringement</h2>
              <p>For details on the information required by law for valid notification, see 17 U.S.C. § 512(c)(3).</p>
              <p>To file a notice of infringement with either the website owner or the ISP, you must provide a written communication that sets forth the items specified below. You will be liable for damages (including damages, costs, and attorneys’ fees) if you materially misrepresent that the website or a web page is infringing your copyright. If you are not certain whether certain material of yours are protected by copyright laws, we suggest that you first contact an attorney.</p>
              <p>Please send DMCA notifications of claimed copyright infringement to <a className="text-lt-blue-500 underline" href="mailto:support@leadstunnel.com">support@leadstunnel.com</a>.</p>
              <p>To expedite our ability to process your request, please use the following format (including section numbers):</p>
              <ol className="list-decimal pl-4">
                <li><p>Identify in detail the copyrighted work that you believe has been infringed upon.</p></li>
                <li><p>Identify the material that you claim is infringing the copyrighted work listed in #1 above. You must include the URL(s) (i/e/ the locations of the page or pages that contain the alleged infringing material. You must also include a description of the specific content which you claim is infringing on your copyright.</p></li>
                <li><p>Provide information reasonably sufficient to permit the website owner to contact you. At a minimum an email address and a phone number are required.</p></li>
                <li><p>Include the following statement: “I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am 	authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. I also affirm that as the copyright owner, I have a good faith belief that use of the 	material in the manner complained of is not authorized by me, my agent, or the law.”</p></li>
                <li><p>The signature of the copyright owner or a person authorized to act on behalf of the copyright owner must be included. You may send your notice via email provided 	such notice includes a proper electronic signature. The signature or electronic signature must be that of the copyright owner, or a person authorized to act on behalf of 	the owner, of an exclusive copyright that has allegedly been infringed.</p></li>
              </ol>
            </div>
            <div className="py-8">
              <h2 className="font-bold text-lg mb-2">Counter-notification To Claimed Copyright Infringement</h2>
              <p>Please be advised that United States copyright law provides substantial penalties for a false counter notice filed in response to a notice of copyright infringement.</p>
              <p>Accordingly, if you are not sure whether certain material of yours is protected by copyright laws, we suggest that you first contact an attorney for a professional legal opinion.</p>
              <p>If a notice of copyright infringement has been filed with the website owner and/or the ISP against you, the owner and/or the ISP will attempt to notify you and provide you with a copy of the notice of copyright infringement.</p>
              <p>If you have a good faith belief that you have been wrongfully accused, you may file a counter-notification with the website owner and/or the ISP.</p>
              <p>If the website owner and/or the ISP receives a valid counter-notification, the DMCA provides that the removed or blocked information will be restored or access will be re-enabled.</p>
              <p>The website owner and/or the ISP will replace the removed material and cease disabling access to it in not less than 10, nor more than 14, business days following receipt of the counter-notification, unless the website owner and/or ISP first receives notice from the complaining party that such complaining party has filed an action seeking a court order to restrain the alleged infringer from engaging in infringing activity relating to the material on this website.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DmcaNotice
