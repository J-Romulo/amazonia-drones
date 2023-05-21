import * as S from './styles';

interface LoaderProps {
	color?: string;
	size?: number;
}

export default function Loader({ color, size }: LoaderProps) {
	return (
		<S.Container>
			<S.Spinner loading={true} color={color} size={size} />
		</S.Container>
	);
}
