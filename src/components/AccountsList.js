import React from 'react';
import useDeleteAccounts from '../webservice/useDeleteAccounts';
import useGetAccounts from '../webservice/useGetAccounts';

const propTypes = {};
const defaultProps = {};

const AccountsList = () => {
	const accountsList = useGetAccounts();
	const deleteAccountAsync = useDeleteAccounts();

	return (
		<ul>
			{accountsList?.map((account) => (
				<li key={`account-${account.id}`}>
					{account.name}
					<button onClick={() => { deleteAccountAsync(account.id) }}>X</button>
				</li>
			))}
		</ul>
	);
};

AccountsList.propTypes = propTypes;
AccountsList.defaultProps = defaultProps;

export default AccountsList;
