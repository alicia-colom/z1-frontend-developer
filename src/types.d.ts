interface StateDataProps {
	photo: string;
	outcome: string;
	isApproved: boolean;
}

interface HandleStateProps extends StateDataProps {
	photo: string;
	outcome: string;
	isApproved: boolean;
	handleOutcomeValue: (result: any) => void;
	handleIsApprovedValue: (result: any) => void;
	handlePhotoValue: (result: any) => void;
}
