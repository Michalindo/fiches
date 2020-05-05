import React from 'react';
import './TranslationTable.scss';
import Input from '../../UI/Input/Input';
import { strings } from '../../shared/strings';

export default function TranslationTable(props) {
	return (
		<table className='translationTable'>
			<thead>
				<tr>
					<th className='translationTable-heading'>
						{strings.translationList.source}
					</th>
					<th className='translationTable-heading'>
						{strings.translationList.translation}
					</th>
					<th className='translationTable-heading'>
						{strings.translationList.save}
					</th>
				</tr>
			</thead>
			<tbody className='translationTable-body'>
				{props.fiches.map((element, index) => {
					return (
						<tr key={index} className='translationTable-row'>
							<td className='translationTable-data'>
								<p>{element.source}</p>
							</td>
							<td className='translationTable-data'>
								<p>{element.target}</p>
							</td>
							<td className='translationTable-data'>
								<Input
									className='translationTable-checkbox'
									elementType='checkbox'
									clicked={() => props.checkboxClicked(element)}
								/>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
