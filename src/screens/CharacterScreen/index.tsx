import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import breakingBadApi from '../../api/breakingBadApi';
import CharacterCard from '../../components/CharacterCard';

import { CharacterInterface } from '../../interfaces/interfaces';

const Component = () => {
    const [characters, setcharacters] = useState<[CharacterInterface] | null>(null);
    const getCharacters = async () => {
        const { data } = await breakingBadApi.get<[CharacterInterface]>('/characters');
        setcharacters(data);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    const renderCharacters = characters?.map((character, index) => {
        return <CharacterCard key={`character-${index}`} character={character} />;
    });

    return (
        <ScrollView>
            {renderCharacters}
        </ScrollView>
    );
};

export default Component;