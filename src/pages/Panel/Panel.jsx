import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $user } from '../../model/User';
import { $ids, $statistics, loadIds } from '../../model/Panel';
import { PageContent, Loader } from '../../ui';
import { DateBox } from './DateBox';
import { WelcomeBox } from './WelcomeBox';
import { requireAuth } from '../../hocs';
import { Graphs } from './Graphs';
import Paper from '@material-ui/core/Paper';

const Panel = requireAuth(() => {
  useEffect(loadIds, []);

  const { user: { firstname, patronymic } } = useStore($user);
  const { loading, data } = useStore($ids);
  const { graphs } = useStore($statistics);

  if (loading) { return <Loader /> };

  return (
    <PageContent>
      <WelcomeBox
        firstname={firstname}
        patronymic={patronymic}
      />
      <Paper className='panel-box'>
        <span>Загрузка статистики</span>
        <DateBox ids={data} />
      </Paper>
      <Graphs data={graphs} />
    </PageContent>
  );
});

export { Panel };