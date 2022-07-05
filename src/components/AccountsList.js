import useGetAccounts from '../webservice/account/useGetAccounts';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useDeleteAccount from '../webservice/account/useDeleteAccount';
import AccountEdit from './AccountEdit';
import usePatchAccount from '../webservice/account/usePatchAccount';


const propTypes = {};
const defaultProps = {};

//{href: 'https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/0D0SRwdmD6w8A4hPsvHw', rel: 'self', type: 'DELETE'}

// function deleteAccount (accountId) {
// 	fetch(`https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts/${accountId}`, {method: 'DELETE'})
// 		.then(res => {
// 			console.log(res);
// 			if (res.status === 200) {
// 				console.log('DELETED!!!!!');
// 			}
// 		})
// 		// .then(data => {
// 		// 	console.log(data);
// 		// });
// }

const AccountsList = () => {
	const accountsList = useGetAccounts();
	const deleteAccount = useDeleteAccount();
	const patchAccount = usePatchAccount();


	const [account, setAccount] = useState(null);
	const accountNameEditRef = useRef();

	return (
		<>
			<ul>
				{accountsList?.map((accnt, i) => (
					<li key={`accnt-${accnt.id}`} onClick={(e) => { setAccount(accnt) }}>
						{
							accnt.id === account?.id
								? (
										<>
											<input type="text" ref={accountNameEditRef} defaultValue={accnt.name}/>
											<button onClick={
												() => patchAccount({
													id: accnt.id,
													name: accountNameEditRef.current.value,
												})
											}>Save Name</button>
										</>
								)
								: accnt.name
						}
						<button onClick={(e) => {
							e.stopPropagation();
							deleteAccount(accnt.id)
						}}>X</button>
					</li>
				))}
			</ul>{account ? <AccountEdit id={account.id} /> : null}
		</>
	);
};

AccountsList.propTypes = propTypes;
AccountsList.defaultProps = defaultProps;

export default AccountsList;
