type HandleError = {
	error: any | Error;
	componentName: string;
	additionalInfo?: string;
};

export const handleError = ({
	error,
	componentName,
	additionalInfo,
}: HandleError) => {
	if (error instanceof Error) {
		console.log(
			`Ошибка ${error.message} в компоненте ${componentName}. ${
				additionalInfo
					? `Дополнительная информация: ${additionalInfo}`
					: ""
			}`
		);
	} else {
		console.log(`Произошла ошибка ${error} в компоненте ${componentName}.`);
	}
};
