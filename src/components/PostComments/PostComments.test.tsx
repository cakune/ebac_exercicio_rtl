import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Espera-se que o componente renderize', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Para adicionar comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('txt-comment'), {
            target: {
                value: 'Eu adoro miniaturas',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comment'));
    
        fireEvent.change(screen.getByTestId('txt-comment'), {
            target: {
                value: 'Linda miniatura',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comment'));

        expect(screen.getAllByTestId('test-post-comment')).toHaveLength(2);
    });
});