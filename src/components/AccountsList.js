import useGetAccounts from '../webservice/useGetAccounts';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useDeleteAccount from '../webservice/useDeleteAccount';

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

const AccountsList = ({accounts, setAccounts}) => {
	const accountsList = useGetAccounts();
	const deleteAccount = useDeleteAccount();

	useEffect(() => {
		setAccounts(accountsList)
	}, [accountsList]);
	// console.log(accounts);
	return (
		<ul>
			{accountsList?.map((account, i) => (
				<li key={`account-${account.id}`}>{account.name} <button onClick={()=>{deleteAccount(account.id)}}>X</button></li>
			))}
		</ul>
	);
};

AccountsList.propTypes = propTypes;
AccountsList.defaultProps = defaultProps;

export default AccountsList;